import React from 'react';
import { Helmet } from "react-helmet";


const DetailsRender = ({movie, toEdit}) => (

  <div className="App">
  <Helmet>
   <meta charSet="utf-8" />
   <title>Details</title>
  </Helmet>
  <header>
  <div className="overlay">
    <h1># Details</h1>
  <p>View detailed information about <b>{movie.title}</b> below.</p>
    <br></br>
  </div>
  </header>
  <div className="container">
    <h1> {movie.title} </h1>
    <div className="movieWrapper">
      <div className="movieItem">
        <h3>Description: </h3>
        <p>{movie.description}</p>
        </div>
        <div className="movieItem">
        <h3>Director: </h3>
        <p>{movie.director}</p>
        </div>
        <div className="movieItem">
        <h3>Rating: </h3>
        <p>{movie.rating}</p>
        </div>
      </div>
      <div className="buttons">
      <button onClick={toEdit}>Edit movie</button>
      </div>
  </div>
</div>

);

export default DetailsRender;
