import React from 'react';

const MovieSubmitRender = ({onMovieSubmit, onTitleChange, onDescChange, onDirChange, onRateChange}) => (

  <div className="App">
  <form className ="add" onSubmit={onMovieSubmit}>
    <div className="addmovie">
    <input type="text" placeholder="Title" onChange={onTitleChange} />
    <br></br>
    <input type="text" placeholder="Description" onChange={onDescChange} />
    <br></br>
    <input type="text" placeholder="Director" onChange={onDirChange} />
    <br></br>
    <input type="text" placeholder="Rating"  onChange={onRateChange}/>
    <br></br>
    <button type="submit" className="movieSubmit" onSubmit={onMovieSubmit}> </button>
    </div>
  </form>
  </div>
);

export default MovieSubmitRender;
