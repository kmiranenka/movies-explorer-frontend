import React from 'react';
import { Route, Switch,  withRouter } from 'react-router-dom';
import Register from '../Register/Register.js'
import Login from '../Login/Login.js'
import * as auth from '../../utils/auth.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Profile from '../Profile/Profile.js';
import Movies from '../Movies/Movies';
import ErrorPage from '../ErrorPage/ErrorPage';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      currentUser: {
        name: '',
        about: '',
      },
      email: '',
      isPopupOpen: false,
      errorPopup: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.handleTokenCheck = this.handleTokenCheck.bind(this);
  }
  componentDidMount() {
    this.handleTokenCheck();
  }



  handleLogin(email, password) {
    auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          this.setState({
            loggedIn: true,
          }, () => {
            this.props.history.push('/movies');
          });
        } else {

          this.setState({
            isPopupOpen: true,
          })
        }

      })
      .catch(err => console.log(err));
  }

  handleRegister(email, password, name) {
    auth.register(email, password, name).then((res) => {
      if (res) {
        this.handleLogin(email, password)
        this.setState({
          currentUser: {
            name: name,
            email: email,
          },
        })
      }
    })
  }

  closePopup() {
    this.setState({
      isPopupOpen: false,
    })
  }

  handleTokenCheck() {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      auth.getContent(jwt).then((res) => {
        if (res) {
          const userEmail = res.data.email;
          const name = res.data.name;
          this.setState({
            loggedIn: true,
            email: userEmail,
            currentUser: {
              name: name,
              email: userEmail,
            }

          }, () => {
            this.props.history.push('/movies');
          });
        }
      });
    }
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/error">
            <ErrorPage />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/signup">
            <Register handleRegister={this.handleRegister} errorPopup={this.state.errorPopup} isPopupOpen={this.state.isPopupOpen} onPopupClose={this.closePopup} />
          </Route>
          <Route path="/signin">
            <Login handleLogin={this.handleLogin} isPopupOpen={this.state.isPopupOpen} onPopupClose={this.closePopup} />
          </Route>
          <ProtectedRoute exact path="/profile" loggedIn={this.state.loggedIn} component={Profile} userEmail={this.state.email} user={this.state.currentUser} />
          <ProtectedRoute exact path="/movies" loggedIn={this.state.loggedIn} component={Movies} />
          <ProtectedRoute exact path="/saved-movies" loggedIn={this.state.loggedIn} component={SavedMovies} />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);