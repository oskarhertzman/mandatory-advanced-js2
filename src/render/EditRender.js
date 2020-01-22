import React from 'react';

const EditRender = ({movie, onTitleChange, onDescChange, onDirChange, onRateChange, onMovieSubmit}) => (


  <div className="App">

  <form>
  <form className ="edit" onSubmit={onMovieSubmit}>
    <div className="editmovie">
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
    <button type="submit" className="movieSubmit" onSubmit={onMovieSubmit}> </button>
    </div>
  </form>
  </form>
  </div>
);

export default EditRender;
