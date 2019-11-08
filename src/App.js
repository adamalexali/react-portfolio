import React, { Component } from "react";
import "animate.css/animate.min.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <div className="introduction section">
          <h4 className="serif animated fadeIn">Hey! My name is</h4>
          <h1 className="bold animated fadeInRight delay-1s">Adam Ali</h1>
          <h3 className="important serif subtitle animated fadeIn delay-2s">
            I'm a developer.
          </h3>
        </div>
        <div className="fixedContainer">
          <div>
            <ul>
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
