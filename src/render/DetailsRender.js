import React from 'react';

const DetailsRender = ({movie}) => (

<div className="App">
  <h1>{movie.title}</h1>
  <h3>{movie.director}</h3>
  <p>{movie.description}</p>
  <p>{movie.rating} / 5</p>
</div>

);

export default DetailsRender;
