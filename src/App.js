import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./App.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ProjectCard from './ProjectCard';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <div>
          <Navbar
            sticky="top"
            collapseOnSelect
            expand="sm"
            className="justify-content-end animated fadeInRight delay-3s"
          >
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="justify-content-end"
            />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="flex-column justify-content-end">
                <Nav.Link href="#">
                  <i class="fab fa-linkedin"></i>
                </Nav.Link>
                <Nav.Link href="#">Work</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="introduction section">
          <h4 className="serif animated fadeIn">Hey! My name is</h4>
          <h1 className="bold animated fadeInRight delay-1s">Adam Ali</h1>
          <h3 className="important serif subtitle animated fadeIn delay-2s">
            I'm a developer.
          </h3>
        </div>
        <div className="project section">
          <div>
            <ProjectCard title="ModPod" img="/public/img/modpod.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
