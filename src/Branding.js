import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./Branding.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ScrollAnimation from "react-animate-on-scroll";

import arc1 from "./images/branding/arc1.jpg";
import arc2 from "./images/branding/arc2.png";
import arc3 from "./images/branding/arc3.jpg";
import arc4 from "./images/branding/arc4.jpg";
import arc5 from "./images/branding/arc5.png";
import arc6 from "./images/branding/arc6.jpg";
import arc7 from "./images/branding/arc7.jpg";

const Branding = () => {
  return (
    <div className="caseStudyContainer section">
      <div>
        <Navbar sticky="top">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="justify-content-end"
          />
          <Nav className="flex-column justify-content-end">
            <Nav.Link href="./" className="navLink">
              <i class="fas fa-arrow-left"></i>
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div className="caseStudyTitle">
        <h1 className="bold important animated fadeInDown">
          ARC Travel - Branding
        </h1>
        <div className="subtitle">
          <h2 className="serif animated fadeInUp">
            <span className="bold">Role: </span>UX / UI designer; branding
          </h2>
          <div className="tools">
            <h2 className="serif animated fadeInUp">
              <span className="bold">Tools: </span>Photoshop, Illustrator, InDesign
            </h2>
          </div>
        </div>
      </div>

      <div className="caseStudyBody">
        <div className="sectionText">
          <ScrollAnimation
            // delay="1000"
            animateIn="fadeInLeft"
            animateOnce="true"
          >
            <h4>Overview</h4>
            <p>
              Over the course of my fourth semester, I designed an augmented
              reality way-finding app. The project focused on the branding of
              the app; taking into account the target user group, the company
              values, user experience, and product design.
            </p>
          </ScrollAnimation>
        </div>
        <div className="sectionText">
          <ScrollAnimation animateIn="fadeInRight" animateOnce="true">
            <h4>The Project</h4>
            <p>
              I was tasked with branding a product of my choosing, and what I
              landed on was augmented reality travel. I wanted to create an app
              that would help people navigate a city; guiding them to their
              desitinations and showing location information in augmented
              reality through their phones.
            </p>
          </ScrollAnimation>
        </div>
        <div className="mainText brandingCase">
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <h5>Research</h5>
              <p>
                To begin, I brainstormed ideas related to travel, AR, cities,
                and other topics to help me get a overview of what sort of
                things to include in the app, what users might use it for, what
                it means to travel digitally, etc. It was here that I came up
                with the name ARC -- Augmented Reality City travel.
              </p>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation delay="500" animateIn="fadeIn" animateOnce="true">
              <img src={arc1}></img>
            </ScrollAnimation>
          </div>
        </div>

        <div className="mainText brandingCase">
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <img src={arc2}></img>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation delay="500" animateIn="fadeIn" animateOnce="true">
              <h5>Development</h5>
              <p>
                I created three moodboards that would influence the direction I
                would take with the app. Each moodboard had a different
                aesthetic; based on the different aspects of the product (travel
                and technology). I ended up going forward with a more
                industrial, subway-esque aesthetic. The idea behind my thinking
                was that this app would help users navigate the city, and I was
                inspired by Massimo Vignelli’s work on the New York City subway
                map system. Bold text, minimalistic style and vibrant accents
                was the direction I was heading in.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <p>
                With the aesthetic direction, I started researching the target
                audience and the types of apps they use, as well as competition
                in the AR market.
              </p>
            </ScrollAnimation>
          </div>
        </div>

        <div className="mainText brandingCase">
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <h5>Design</h5>
              <p>
                I had direction and a target audience — I decided to kick off
                the branding by sketching some possible logo designs influenced
                by the insights I gained from my research. The logos were widely
                different in terms of design — I thought of using an AR ‘guide’
                in the form of an animal, but that didn’t seem to fit the brand
                I was already creating. I was influenced by the city subway
                moodboard, so I sketched a lot of designs related to Vignelli’s
                work. I went through many iterations, playing with the colors,
                spacing and overall design, but in the end I was happy with what
                I came up with.
              </p>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <img src={arc3}></img>
            </ScrollAnimation>
            <ScrollAnimation delay="500" animateIn="fadeIn" animateOnce="true">
              <img src={arc4}></img>
            </ScrollAnimation>
            <ScrollAnimation delay="500" animateIn="fadeIn" animateOnce="true">
              <img src={arc5}></img>
            </ScrollAnimation>
          </div>
        </div>

        <div className="mainText brandingCase">
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <p>
                Next, I started working on the UI. I knew I wanted a dark
                interface with warm, vibrant colors. Bold, high contrast letters
                were also a must. The inspiration again was from the subway
                signs in New York.
              </p>
              <p>
                I also created a number of UI elements, such as forms, buttons
                and icons; all done in Illustrator.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <p>
                Taking the UI elements, I mocked up the interface and the
                augmented reality using Photoshop. I mocked up wireframes of
                some of the major screens; Login screen, search, AR interface,
                and blog post included.
              </p>
              <p>
                To finish the branding, I mocked up the logo on some merch, such
                as t-shirts and coffee cups. I also created a fake ad to promote
                the app, which I displayed on a subway wall, apporpriately.
              </p>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <img src={arc6}></img>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <img src={arc7}></img>
            </ScrollAnimation>
          </div>
        </div>

        <div className="sectionText">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
            <h4>Challenges</h4>
            <p>
              The biggest challenge I had during this project was determining
              how I could mock up the AR interface. I would have liked to have a
              functional app at the end of the term, but I didn’t have the time
              or knowledge of apps that could help me build something like this
              at the time. I also found it difficult to decide on a logo and
              name for my brand; I admittedly am not as strong as I would like
              to be in ideation, but once I had an idea I was fine moving
              forward with it, and I am happy with how it turned out in the end.
            </p>
          </ScrollAnimation>
        </div>
        <div className="sectionText">
          <ScrollAnimation animateIn="fadeInRight" animateOnce="true">
            <h4>Outcomes</h4>
            <p>
              I think this project gave me a good idea of the branding process,
              and the design process in general. The steps that I followed
              during this term have stuck with me, and is the same general
              formula I follow whenever I start any design work. I definitely
              got a chance to hone my design skills with this project; from
              Illustrator logo design, to color theory and typography, and also
              wireframing.
            </p>
          </ScrollAnimation>
        </div>
      </div>
      <div className="bottomNav">
        <div>
          <a href="./#/blade">
            <h6>Previous</h6>
            <p>Blade Branding; Interactive Map</p>
          </a>
        </div>
        <div>
          <a href="./#/portfolio">
            <h6>Next</h6>
            <p>Portfolio Site</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Branding;
