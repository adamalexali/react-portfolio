import React, { Component } from "react";
import Modpod from "./Modpod";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact={true} path="/" render={() => <Home />} />
            <Route exact={true} path="/modpod" render={() => <Modpod />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
