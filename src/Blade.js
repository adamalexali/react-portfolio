import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./Blade.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ScrollAnimation from "react-animate-on-scroll";

import blade1 from "./images/blade/blade1.png";
import blade2 from "./images/blade/blade2.png";
import blade3 from "./images/blade/blade3.png";
import blade4 from "./images/blade/blade4.png";
import blade5 from "./images/blade/blade5.png";
import blade6 from "./images/blade/blade6.png";

const Blade = () => {
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
          Blade Branding; Interactive Map
        </h1>
        <div className="subtitle">
          <h2 className="serif animated fadeInUp">
            <span className="bold">Role: </span>Developer
          </h2>
          <div className="tools">
            <h2 className="serif animated fadeInUp">
              <span className="bold">Tools: </span>HTML, CSS, JS, jQuery
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
              I was asked to create an interactive building map and floor plan
              for a new luxury condominium under development. The project would
              have me take a render of the building and allow users to select
              floors by clicking on the image. When a floor is selected, the
              floor is highlighted on the render and the user can see the
              corresponding floor plan.
            </p>
          </ScrollAnimation>
        </div>
        <div className="sectionText">
          <ScrollAnimation animateIn="fadeInRight" animateOnce="true">
            <h4>The Project</h4>
            <p>
              I broke down the project into 3 main areas: Research, Development,
              Debugging. The project took approximately a month to complete, due
              to being in school at the same time I was developing. The project
              itself took longer than I initially thought, but thankfully I was
              able to implement a solution in time to deploy.
            </p>
          </ScrollAnimation>
        </div>
        <div className="mainText bladeCase">
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <h5>Research</h5>
              <p>
                At the start of the project, before I began coding, I decided to
                research more about the company and what solutions they’ve
                implemented in the past. I was directed to Paradigm Condos,
                another condominium that used Blade Branding to build their
                website.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <p>
                Their solution was simple, but different to what I was asked to
                develop. Instead of a render, the building was a simple 2D
                illustration, and was not interactable. Instead, the user would
                use arrow keys to move up and down the floors and see the
                corresponding floor maps. I inspected their code to get an idea
                of what their process was, and found the building was actually a{" "}
                <code>&lt;ul&gt;</code> made up of images of each floor.
                Pressing the arrow keys would color the floor and show the floor
                map. The floor map itself used image maps, a term I hadn’t come
                by until then. Researching more into image maps, I learned that
                this is exactly what I needed to use to be able to create
                specific selectable areas.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <p>
                The process of how this app would work was pretty
                straightforward to me; create image maps for each floor of the
                building render, and when the mouse hovers over the area,
                highlight the area. When clicked, the floor map will show up.
                The user then would be able to click on image maps on the floor
                map which will show different suite plans.
              </p>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation delay="500" animateIn="fadeIn" animateOnce="true">
              <img src={blade1}></img>
            </ScrollAnimation>
            <ScrollAnimation delay="500" animateIn="fadeIn" animateOnce="true">
              <img src={blade2}></img>
            </ScrollAnimation>
          </div>
        </div>
        <div className="mainText bladeCase">
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <img src={blade3}></img>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <img src={blade4}></img>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation delay="500" animateIn="fadeIn" animateOnce="true">
              <h5>Development</h5>
              <p>
                I started the development process by setting up an environment
                on my home PC. I like to break up the development of any
                application into the basic function and start adding more
                functionality to it as I go.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <p>
                For the project, I began by just putting the building render
                into an html file. I started creating the image maps using an
                online generator, and I had it link to a blank page when clicked
                just to make sure they were working. This worked perfectly fine,
                so I moved on to interactive part — I wanted it to highlight
                when I hovered over it. Knowing very little about image maps, I
                thought this would be easy as setting a color property in CSS.
                My reasoning was that image maps were essentially creating an
                area, so I thought I could just set an inside color. This turned
                out not to be the case, and in fact, to actually color the image
                map areas requires a jQuery plugin I found called maphilight
                created by David Lynch. The plugin is, for the most part, simple
                to use. Setting the properties of the image map to update when
                clicked or when pressing a button was the only difficult part,
                but thankful I got help from one of my professors at George
                Brown College to get it functional.
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <div className="mainText bladeCase">
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <p>
                The next step was to write the JavaScript to update the
                floorplan when the corresponding floor was highlighted. I knew
                the best way was to use a switch statement, with each case
                representing a different floor. The conditional would take the
                floor number and execute a function which would do a number of
                things depending on the case; it would highlight the floor on
                the render, change the floorplan to the corresponding floor, and
                update the text to show the suite type and floor number.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <p>
                From here the only thing was to style the document, which I did
                using primarily CSS Grid. I love Grid because of how
                straightforward it is to lay out different components of the
                design and make them responsive. I was given a brand guideline
                to follow with styles and colors, which I implemented into the
                design of the application.
              </p>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <img src={blade5}></img>
            </ScrollAnimation>
          </div>
        </div>

        <div className="mainText bladeCase">
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <h5>Deployment</h5>
              <p>
                The final step was to put the code into WordPress, which ended
                up being the most troublesome part of the process. As this was
                my first development job at an actual agency, I was used to
                developing and running code locally on my computer, or if I am
                publishing it, to GitHub Pages. I had never really used a CMS
                before. It took some time before I felt comfortable, and
                implementing custom code, especially various jQuery plugins, was
                not easy with the access I was given. Through various
                workarounds and tweaks to my code, I managed to get it working.
              </p>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <img src={blade6}></img>
            </ScrollAnimation>
          </div>
        </div>

        <div className="sectionText">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
            <h4>Challenges</h4>
            <p>
              The challenges I faced were almost all solved by researching more
              about the problems I was having. It seems that almost every
              question you can ask as a developer has been asked before, so
              using resources like Stack Overflow to learn, debug, and connect
              with others is integral to the development process.
            </p>
            <p>
              The main challenge I had was implementing the code into the
              WordPress site; as I was just a freelance developer and brought
              onto the project quite late, I didn’t have as much information as
              I’d like, nor did I have access to the WordPress theme folder. I
              was given an HTML element block that you can use to add custom
              code, so I was able to put all of my code into that block.
              Problems arose when I tried to preview the page — I found it would
              work in the pagebuilder but break when viewed on the site. It took
              a good amount of my debugging time and long nights before I
              discovered the problem arose from WordPress not reading jQuery the
              same way outside of the CMS. After adjusting the code, it worked
              perfectly.
            </p>
          </ScrollAnimation>
        </div>
        <div className="sectionText">
          <ScrollAnimation animateIn="fadeInRight" animateOnce="true">
            <h4>Outcomes</h4>
            <p>
              I learned a lot about the development process; how it differs from
              working individually create fun side projects to working with a
              professional agency on a CMS with a deadline. There was some
              stress, but I found I can work really well when given clear
              direction and outlines. This project was also a lesson in seeking
              help when needed; either online or through the network at the
              College.
            </p>
          </ScrollAnimation>
        </div>
      </div>
      <div className="bottomNav">
        <div>
          <a href="./#/modpod">
            <h6>Previous</h6>
            <p>ModPod Immersive Environment</p>
          </a>
        </div>
        <div>
          <a href="./#/arc">
            <h6>Next</h6>
            <p>ARC Travel - Branding</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blade;
