import React from 'react';
import MovieSubmitRender from '../render/MovieSubmitRender.js'
import { postMovie } from '../api/Apicalls.js';
import {Redirect} from "react-router-dom";
import '../styles/App.css';

class Add extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      director: "",
      rating: "",
      redirect: false,
      error: 'none'
    }

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleDirChange = this.handleDirChange.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
  }

handleAddMovie (e) {
  e.preventDefault();

  let title = this.state.title;
  let description = this.state.description;
  let director = this.state.director;
  let rating = this.state.rating;

  let movie = {
    title: title,
    description: description,
    director: director,
    rating: rating,
  };

  postMovie(movie).then((newMovie) => {
    if (newMovie) {
      this.setState({
        error: 'none',
        redirect: true
      })
    }
    else {
      this.setState({
        error: 'inline',
      })
    }
  })
  .catch((err) => {
  alert(err);
});
}

handleTitleChange(e) {
  this.setState({title: e.target.value});
}

handleDescChange(e) {
  this.setState({description: e.target.value});
}

handleDirChange(e) {
  this.setState({director: e.target.value});
}

handleRateChange(e) {
  this.setState({rating: e.target.value});
}

render() {
  if (this.state.redirect) {
    return  <Redirect to={'/movies'}></Redirect>
  }
  return (
  <MovieSubmitRender
  onMovieSubmit={this.handleAddMovie}
  onTitleChange={this.handleTitleChange}
  onDescChange={this.handleDescChange}
  onDirChange={this.handleDirChange}
  onRateChange={this.handleRateChange}
  error={this.state.error}/>
  );
  }
}

export default Add;
