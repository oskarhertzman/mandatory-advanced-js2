import React from 'react';
import EditRender from '../render/EditRender.js';
import { Redirect } from "react-router-dom";
import { getMovie, postEditMovie } from '../api/Apicalls.js';
import '../styles/App.css';
const axios = require('axios').default;

class Edit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      movie: {},
      redirect: false,
      error: 'none',

    }
    this.handleTitleEdit = this.handleTitleEdit.bind(this);
    this.handleDescEdit = this.handleDescEdit.bind(this);
    this.handleDirEdit = this.handleDirEdit.bind(this);
    this.handleRateEdit = this.handleRateEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentDidMount() {
    const CancelToken = axios.CancelToken;
    this.source = CancelToken.source();
    getMovie(this.props.match.params.id, this.source).then((edMovie) => {
      this.setState({movie: edMovie.data})

    }).catch((err) => {
      alert(err);
    });
  }

  handleTitleEdit(e) {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.movie.title = e.target.value;
    this.setState(stateCopy);
  }

  handleDescEdit(e) {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.movie.description = e.target.value;
    this.setState(stateCopy);
  }

  handleDirEdit(e) {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.movie.director = e.target.value;
    this.setState(stateCopy);
  }

  handleRateEdit(e) {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.movie.rating = e.target.value;
    this.setState(stateCopy);
  }

  handleEditSubmit(e) {
    e.preventDefault();
    let id = this.props.match.params.id;
    let movie = this.state.movie;
    postEditMovie(id, movie).then((editMovie) => {
      if(editMovie) {
        this.setState({
          error: 'none',
          redirect: true,
        })
      }
      else {
        this.setState({error: 'inline'})
      }
    }).catch((err) => {
    alert(err);
  });
  }

render() {
  if (this.state.redirect) {
    return <Redirect to="/movies" />
  }
  return (
  <EditRender
  movie={this.state.movie}
  onTitleChange={this.handleTitleEdit}
  onDescChange={this.handleDescEdit}
  onDirChange={this.handleDirEdit}
  onRateChange={this.handleRateEdit}
  onMovieSubmit={this.handleEditSubmit}
  error={this.state.error}
  />

  );
  }
}

export default Edit;
