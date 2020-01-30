import React from 'react';
import DetailsRender from '../render/DetailsRender.js';
import { getMovie } from '../api/Apicalls.js';
import { Redirect } from "react-router-dom";
import '../styles/App.css';
const axios = require('axios').default;

class Details extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      redirect: false,
    }
    this.handleRedirect = this.handleRedirect.bind(this);
  }
  componentDidMount () {
    const CancelToken = axios.CancelToken;
    this.source = CancelToken.source();
    getMovie(this.props.match.params.id, this.source).then((edMovie) => {
      this.setState({movie: edMovie.data})
    }).catch((err) => {
      alert(err);
    });
  }

  handleRedirect () {
    this.setState({redirect: true});
  }

render() {
  if (this.state.redirect) {
    return <Redirect to={"/edit/movie/" + this.state.movie.id} />
  }
  return (
    <DetailsRender
      movie={this.state.movie}
      toEdit={this.handleRedirect} />
  );
  }
}

export default Details;
