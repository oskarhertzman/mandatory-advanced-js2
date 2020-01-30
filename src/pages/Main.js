import React from 'react';
import { Redirect } from "react-router-dom";
import MoviesRender from '../render/MoviesRender.js'
import { getMovies, deleteMovie } from '../api/Apicalls.js'
import '../styles/App.css';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      edit: "",
      search: '',
      redirect: false,
    }

    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    getMovies().then((response) => {
      this.setState({movies: response})
    }).catch((err) => {
    alert(err);
});
}

handleRedirect () {
  this.setState({redirect: true})
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
  if(this.state.redirect) {
      return  <Redirect to={'/add'}></Redirect>
  }
  return (
<MoviesRender
  searchListen={this.handleSearch}
  search={this.state.search}
  deleteClick={this.handleDelete}
  editClick={this.handleEdit}
  movies={this.state.movies}
  toAdd={this.handleRedirect}/>
  );
  }
}

export default Main;
