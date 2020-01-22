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

    }
    this.handleTitleEdit = this.handleTitleEdit.bind(this);
    this.handleDescEdit = this.handleDescEdit.bind(this);
    this.handleDirEdit = this.handleDirEdit.bind(this);
    this.handleRateEdit = this.handleRateEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }



  componentDidMount() {
    console.log(this.props.match.params.id);

    const CancelToken = axios.CancelToken;
    this.source = CancelToken.source();

    getMovie(this.props.match.params.id, this.source).then((edMovie) => {

      console.log(edMovie);
      console.log(edMovie.data);
      this.setState({movie: edMovie.data})

    }).catch((err) => {
      alert(err);
    });
  }

  handleTitleEdit(e) {
    console.log(e.target.value);
    let stateCopy = Object.assign({}, this.state);
    stateCopy.movie.title = e.target.value;
    this.setState(stateCopy);

  }

  handleDescEdit(e) {
    console.log(e.target.value);
    let stateCopy = Object.assign({}, this.state);
    stateCopy.movie.description = e.target.value;
    this.setState(stateCopy);
  }

  handleDirEdit(e) {
    console.log(e.target.value);
    let stateCopy = Object.assign({}, this.state);
    stateCopy.movie.director = e.target.value;
    this.setState(stateCopy);
  }

  handleRateEdit(e) {
    console.log(e.target.value);
    let stateCopy = Object.assign({}, this.state);
    stateCopy.movie.rating = e.target.value;
    this.setState(stateCopy);
  }


  handleEditSubmit(e) {
    e.preventDefault();
    let id = this.props.match.params.id;
    let movie = this.state.movie;
    postEditMovie(id, movie).then((editMovie) => {
      this.setState({redirect: true})
      console.log(editMovie);
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
  />

  );
  }
}

export default Edit;
