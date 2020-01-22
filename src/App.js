import React from 'react';
import Main from './pages/Main.js';
import Add from './pages/Add.js';
import Edit from './pages/Edit.js';
import Details from './pages/Details.js';
import MoviesRender from './render/MoviesRender.js';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import { Helmet } from "react-helmet";
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

render() {
  let redirect;
  if (window.location.pathname === "/") {
    redirect = <Redirect to="/movies" />
  }
  return (

    <Router>
    {redirect}
      <Route path="/add" component={Add} />
      <Route exact path="/movies" component={Main} />
      <Route path="/select/:id" component={Edit} />
      <Route path="/movie/:id" component={Details} />
    </Router>


  );
  }
}

export default App;
