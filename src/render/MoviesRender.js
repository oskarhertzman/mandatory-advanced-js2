import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from '../styles/ec-logo.png';


const MoviesRender = ({searchListen, search, deleteClick, editClick, movies, toAdd}) => {

  const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>EC Movie</title>
      </Helmet>
      <header>
        <div className="overlay">
          <h1><img src={logo} style={{width: '150px'}} alt="EC-logo"/> EC Movie</h1>
          <p>View a list of movies below</p>
          <br></br>
          <button onClick={toAdd}>ADD MOVIE</button>
        </div>
      </header>
      <label id="search">
        Search: 
        <input id="searchbox" type="text" onChange={searchListen}/>
      </label>
      <main>
        <div className="movies">
          {movies.filter((movieSearch) => {
        let searchQuery = toTitleCase(search);

        if (!searchQuery) {
          return movieSearch;
        }
        else {
          if (movieSearch.title.indexOf(searchQuery) === -1 &&
          movieSearch.director.indexOf(searchQuery) === -1 &&
          movieSearch.description.indexOf(searchQuery) === -1 ) {
            return false;
          }
          else {
            return true;
          }
        }
      }).map((mov) =>
      <div className="container" key={mov.id}>
        <h1> {mov.title} </h1>
      <div className="movieWrapper">
      <div className="movieItem">
        <h3>Description: </h3>
        <p>{mov.description}</p>
      </div>
      <div className="movieItem">
        <h3>Director: </h3>
        <p>{mov.director}</p>
      </div>
      <div className="movieItem">
        <h3>Rating: </h3>
        <p>{mov.rating}</p>
      </div>
      </div>

      <div className="buttons">
    <button ><Link to={'/edit/movie/' + mov.id}>Edit</Link></button>
    <button ><Link to={'/details/movie/' + mov.id}>Details</Link></button>
    <button onClick={() => deleteClick(mov.id)}> Delete </button>
    </div>
    <hr className="hrMain"></hr>
    </div>
    )}
  </div>
</main>
</div>
);
};

export default MoviesRender;
