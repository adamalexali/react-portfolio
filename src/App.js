import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./App.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";
import ScrollAnimation from "react-animate-on-scroll";

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <div>
          <Navbar
            sticky="top"
            collapseOnSelect
            expand="sm"
            className="justify-content-end"
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
                <Nav.Link
                  href="https://www.linkedin.com/in/adamalexali/"
                  className="animated fadeInRight delay-3s"
                >
                  <i className="fab fa-linkedin"></i>
                </Nav.Link>
                <Nav.Link href="#" className="animated fadeInRight delay-4s">
                  Work
                </Nav.Link>
                <Nav.Link href="#" className="animated fadeInRight delay-5s">
                  Contact
                </Nav.Link>
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
            <ScrollAnimation animateIn="fadeIn">
              <ProjectCard
                title="ModPod"
                img="https://images.unsplash.com/photo-1573236779094-0d5303cdf94a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1832&q=80"
              />
            </ScrollAnimation>
          </div>
        </div>
        <div className="third section">
          <h4>Hey! My name is</h4>
          <h1>Adam Ali</h1>
          <h3>I'm a developer.</h3>
        </div>
      </div>
    );
  }
}

export default App;
