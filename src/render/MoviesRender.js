import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
  const MoviesRender = ({searchListen, search, deleteClick, editClick, movies}) => {

  let chunk = function chunks(data, n) {
      let result = [];
      let chunk = [];
      for (let i = 0; i < data.length; i++) {
        let x = data[i];
        chunk.push(x);
        if (chunk.length === n) {
          result.push(chunk);
          chunk = [];
        }
      }
      if (chunk.length) {
        result.push(chunk);
      }
      return result;
    }



    return (
    <div className="App">
    <header>
	<div className="overlay">
    <h1>Simply The Best</h1>
    <h3>Reasons for Choosing US</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
	  <br></br>
	  <button>READ MORE</button>
		</div>
</header>
      <div className="movies">
      <label>
      Search: 
      <input id="searchbox" type="text" onChange={searchListen}/>
      </label>
        {movies.filter((movieSearch) => {
          let searchQuery = search;

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
        }).map((mov, i) =>

        <div>
          <h2>{mov.title}</h2>
          <p>{mov.description}</p>
          <p>{mov.director}</p>
          <p>{mov.rating}</p>
          <button ><Link to={'/select/' + mov.id}>Edit</Link></button>
          <button ><Link to={'/movie/' + mov.id}>Details</Link></button>
          <button onClick={() => deleteClick(mov.id)}> Delete </button>
          </div>
        )}

      </div>
    </div>
  );
  };


export default MoviesRender;
