import React, { Component } from "react";
import Modpod from "./Modpod";
import Blade from "./Blade";
import Branding from "./Branding";
import Portfolio from "./Portfolio";
import Home from "./Home";
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter basename="#">
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/modpod" component={Modpod} />
          <Route exact path="/blade" component={Blade} />
          <Route exact path="/arc" component={Branding} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
