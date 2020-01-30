import React from 'react';
import { Helmet } from "react-helmet";

const EditRender = ({movie, onTitleChange, onDescChange, onDirChange, onRateChange, onMovieSubmit, error}) => (


  <div className="App">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Edit</title>
    </Helmet>
    <header>
      <div className="overlay">
    <h1># Edit</h1>
    <p>Edit the selected movie below</p>
    <br></br>
  </div>
  </header>
  <form className ="edit" onSubmit={onMovieSubmit}>
    <div className="editmovie">
    <p style={{display: error, fontWeight: 'bold', color: 'red'}} >Invalid input!</p>
    <h2> Title: </h2>
    <input type="text" placeholder="Title" value={movie.title} onChange={onTitleChange}/>
    <br></br>
    <h2> Director: </h2>
    <input type="text" placeholder="Director" value={movie.director} onChange={onDirChange}/>
    <br></br>
    <h2> Description: </h2>
    <input type="text" placeholder="Description" value={movie.description} onChange={onDescChange}  />
    <br></br>
    <h2> Rating: </h2>
    <input type="text" placeholder="Rating" value={movie.rating} onChange={onRateChange} />
    <br></br>
    <button type="submit" className="movieSubmit" onSubmit={onMovieSubmit}>Update</button>
    </div>
  </form>
  </div>
);

export default EditRender;
