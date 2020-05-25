import React from 'react';
import About from './About/About.js'
import LogIn from './LogIn/LogIn.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function auth() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </Router>
  )
};