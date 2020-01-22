import React from 'react';
import DetailsRender from '../render/DetailsRender.js'
import { getMovie } from '../api/Apicalls.js'
import '../styles/App.css';
const axios = require('axios').default;


class Details extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      movie: {},

    }
  }

  componentDidMount () {

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



render() {

  return (

    <DetailsRender movie={this.state.movie} />

  );
  }
}

export default Details;
