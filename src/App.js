import React, { Component } from "react";
import Modpod from "./Modpod";
import Blade from "./Blade";
import Branding from "./Branding";
import Portfolio from "./Portfolio";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
        <div>
          <Switch>
            <Route exact={true} path="/" render={() => <Home />} />
            <Route exact={true} path="/modpod" render={() => <Modpod />} />
            <Route exact={true} path="/blade" render={() => <Blade />} />
            <Route exact={true} path="/arc" render={() => <Branding />} />
            <Route exact={true} path="/portfolio" render={() => <Portfolio />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
