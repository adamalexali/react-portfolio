import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./Home.css";

// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";
import ScrollAnimation from "react-animate-on-scroll";
// import Bounce from "./StyledAnimations";

import modpodImg from "./images/projectCards/modpodImg.png";
import bladeImg from "./images/projectCards/bladeImg.png";
import brandingImg from "./images/projectCards/brandingImg.png";
import portfolioImg from "./images/projectCards/portfolioImg.png";

const Home = () => {
  return (
    <div className="appContainer">
      {/* <div>
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
              <Bounce>
                <Nav.Link
                  href="https://www.linkedin.com/in/adamalexali/"
                  className="navLink"
                >
                  <i className="fab fa-linkedin"></i>
                </Nav.Link>
              </Bounce>
              <Nav.Link href="#" className="navLink animated fadeInRight">
                Work
              </Nav.Link>
              <Nav.Link href="#" className="navLink animated fadeInRight">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div> */}
      <div className="introduction section">
        <h4 className="serif animated fadeIn">Hey! My name is</h4>
        <h1 className="bold animated fadeInRight">Adam Ali</h1>
        <h3 className="important serif subtitle animated fadeIn">
          Designer & developer
        </h3>
      </div>
      <div className="project section">
        <div>
          <ScrollAnimation animateIn="fadeIn" animateOnce="true">
            <ProjectCard title="ModPod" img={modpodImg} alt="ModPod" />
          </ScrollAnimation>
        </div>
        <div>
          <ScrollAnimation animateIn="fadeIn" animateOnce="true">
            <ProjectCard title="Blade" img={bladeImg} alt="Blade" />
          </ScrollAnimation>
        </div>
        {/* <div>
          <ScrollAnimation animateIn="fadeIn" animateOnce="true">
            <ProjectCard title="ARC" img={brandingImg} alt="ARC" />
          </ScrollAnimation>
        </div> */}
        {/* <div>
          <ScrollAnimation animateIn="fadeIn" animateOnce="true">
            <ProjectCard title="Portfolio" img={portfolioImg} alt="Portfolio" />
          </ScrollAnimation>
        </div> */}
      </div>
      <footer>
        <div class="section contact">
          <ScrollAnimation delay="500" animateIn="fadeInUp" animateOnce="true">
            <h4>@adamalexali</h4>
            <div>
              <ul>
                <li>
                  <a
                    className="sm-link"
                    target="_blank"
                    href="https://www.linkedin.com/in/adamalexali/"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="sm-link"
                    target="_blank"
                    href="https://github.com/adamalexali"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="sm-link"
                    target="_blank"
                    href="mailto:adamalexali@gmail.com"
                  >
                    <i className="fab fa-google"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="sm-link"
                    target="_blank"
                    href="https://www.behance.net/adamalexali"
                  >
                    <i className="fab fa-behance"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="sm-link"
                    target="_blank"
                    href="https://www.instagram.com/adamalexali/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </footer>
    </div>
  );
};

export default Home;
