const axios = require('axios').default;

export function getMovies() {

  return axios.get('http://3.120.96.16:3001/movies')
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function postMovie(newMovie) {

return axios.post('http://3.120.96.16:3001/movies', newMovie)
  .then((response) => {
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
}

export function getMovie(id , cancel) {

  return axios.get('http://3.120.96.16:3001/movies/' + id, {cancelToken: cancel.token})
  .then((response) => {
    return response;
  })
  .catch(function (error) {
    console.log(error);
  })
}

export function postEditMovie(id, movie) {

  return axios.put('http://3.120.96.16:3001/movies/' + id, movie)
  .then((response) => {
    return response;
  })
  .catch(function (error) {
    console.log(error);
  })
}

export function deleteMovie(id) {
  return axios.delete('http://3.120.96.16:3001/movies/' + id)
  .then((response) => {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
