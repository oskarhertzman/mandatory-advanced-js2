import React from 'react';
import { Helmet } from "react-helmet";


const MovieSubmitRender = ({onMovieSubmit, onTitleChange, onDescChange, onDirChange, onRateChange, error}) => (

  <div className="App">
  <Helmet>
   <meta charSet="utf-8" />
   <title>Add</title>
  </Helmet>
  <header>
  <div className="overlay">
    <h1># Add</h1>
    <p>Add a desired movie in the form below</p>
    <br></br>
  </div>
  </header>
  <form className ="add" onSubmit={onMovieSubmit}>
    <p style={{display: error, fontWeight: 'bold', color: 'red'}} >Invalid input!</p>
    <div className="addmovie">
    <input type="text" placeholder="Title" onChange={onTitleChange} />
    <br></br>
    <input type="text" placeholder="Description" onChange={onDescChange} />
    <br></br>
    <input type="text" placeholder="Director" onChange={onDirChange} />
    <br></br>
    <input type="text" placeholder="Rating"  onChange={onRateChange}/>
    <br></br>
  <button type="submit" className="movieSubmit" onSubmit={onMovieSubmit}>Submit</button>
    </div>
  </form>
  </div>
);

export default MovieSubmitRender;
