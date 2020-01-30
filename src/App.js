import React from 'react';
import Main from './pages/Main.js';
import Add from './pages/Add.js';
import Edit from './pages/Edit.js';
import Details from './pages/Details.js';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import './styles/Reset.css';
import './styles/App.css';
require('typeface-montserrat');

class App extends React.Component {

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
      <Route path="/edit/movie/:id" component={Edit} />
      <Route path="/details/movie/:id" component={Details} />
    </Router>
  );
  }
}

export default App;
