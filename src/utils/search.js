export const search = (films, searchTerm, showShortFilms) => {
     let results = films.map(film =>{
        if(film.country && film.country.toLowerCase().includes(searchTerm.toLowerCase())){ return film }
        if(film.created_at && film.created_at.toLowerCase().includes(searchTerm.toLowerCase())){return film }
        if(film.description && film.description.toLowerCase().includes(searchTerm.toLowerCase())){return film}
        if(film.director && film.director.toLowerCase().includes(searchTerm.toLowerCase())){return film }  
        if(film.nameEN && film.nameEN.toLowerCase().includes(searchTerm.toLowerCase())){return film}
        if(film.nameRU && film.nameRU.toLowerCase().includes(searchTerm.toLowerCase())){return film} 
        if(film.year && film.year.toLowerCase().includes(searchTerm.toLowerCase())){return film}   
     })

     let data = results.filter(film => { if(film !== undefined){return film}})
     if(showShortFilms){
         data = data.filter(film => { if(film.duration <= 40){return film}})
     } else{
        data = data.filter(film => { if(film.duration > 40){return film}})
     }
     console.log(data)
      return data
  }; 