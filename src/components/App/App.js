import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
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
            loggedIn: false, //сhange to false
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

    handleRegister(e, email, password, name) {
        auth.register(email, password, name).then((res)=>{
          console.log(password)
          if(res){
         this.handleLogin(email, password)
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
              console.log(res)
              const userEmail = res.data.email;
              const name = res.data.name;
              this.setState({
                loggedIn: true,
                email: userEmail,
                currentUser:{
                  name: name,
                  email: userEmail,
                }

              }, () => {
                console.log(window.location.pathname)
                this.props.history.push();
              });
            }
          });
        }
    }

  render() {
    return (

      <>
        <Switch>
          <ProtectedRoute exact path="/profile" loggedIn={this.state.loggedIn} component={Profile} userEmail={this.state.email} user={this.state.currentUser} />
          <ProtectedRoute exact path="/movies" loggedIn={this.state.loggedIn} component={Movies} userEmail={this.state.email} user={this.state.currentUser} />
          <ProtectedRoute exact path="/saved-movies" loggedIn={this.state.loggedIn} component={SavedMovies} userEmail={this.state.email} user={this.state.currentUser} />
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/signup">
            <Register handleRegister={this.handleRegister} errorPopup={this.state.errorPopup} isPopupOpen={this.state.isPopupOpen} onPopupClose={this.closePopup} />
          </Route>
          <Route exact path="/signin">
            <Login handleLogin={this.handleLogin} isPopupOpen={this.state.isPopupOpen} onPopupClose={this.closePopup} />
          </Route>
          
          <Route exact path="/error">
            <ErrorPage />
          </Route>
        </Switch>

      </>
    );
  }
}

export default withRouter(App);