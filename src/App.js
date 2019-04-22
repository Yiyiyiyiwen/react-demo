import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./home.js"
import LoginForm from "./LoginForm.js"
import Play from "./Play.js"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path = "/play" component={Play}></Route>
          <Route path = "/login" component={LoginForm}></Route>
        </Switch>

      </Router>
    );
  }
}
export default App;
