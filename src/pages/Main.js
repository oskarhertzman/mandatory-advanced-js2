import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MoviesRender from '../render/MoviesRender.js'
import { getMovies, deleteMovie, editMovie } from '../api/Apicalls.js'
import '../styles/App.css';
const axios = require('axios').default;
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      edit: "",
      search: '',
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {

    getMovies().then((response) => {
  this.setState({movies: response})
}).catch((err) => {
    alert(err);
});
}

handleSearch (e) {
console.log(e.target.value);
this.setState({search: e.target.value})
}


handleDelete (id) {
  deleteMovie(id).then((delMovie) => {
    getMovies().then((response) => {
  this.setState({movies: response})
}).catch((err) => {
    alert(err);
});
  }).catch((err) => {
    alert(err);
  });
}


render() {
  return (
<MoviesRender
  searchListen={this.handleSearch}
  search={this.state.search}
  deleteClick={this.handleDelete}
  editClick={this.handleEdit}
  movies={this.state.movies}/>
  );
  }
}

export default Main;
