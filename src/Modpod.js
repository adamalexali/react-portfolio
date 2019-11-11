import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./Modpod.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ScrollAnimation from "react-animate-on-scroll";

import modpod1 from "./images/modpod/modpod1.png";
import modpod2 from "./images/modpod/modpod2.jpg";
import modpod3 from "./images/modpod/modpod3.png";
import modpod4 from "./images/modpod/modpod4.png";
import modpod5 from "./images/modpod/modpod5.png";
import modpod6 from "./images/modpod/modpod6.png";
import modpod7 from "./images/modpod/modpod7.png";
import modpod8 from "./images/modpod/modpod8.png";
import modpod9 from "./images/modpod/modpod9.png";
import modpod10 from "./images/modpod/modpod10.png";

const Modpod = () => {
  return (
    <div className="caseStudyContainer section">
      <div>
        <Navbar sticky="top">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="justify-content-end"
          />
          <Nav className="flex-column justify-content-end">
            <Nav.Link
              href="./"
              className="navLink"
            >
              <i class="fas fa-arrow-left"></i>
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div className="caseStudyTitle">
        <h1 className="bold important animated fadeIn">
          Modpod Immersive Environment
        </h1>
        <div className="subtitle">
          <h2 className="serif animated fadeInUp">
            <span className="bold">Role: </span>UX designer; developer
          </h2>
          <div className="tools">
            <h2 className="serif animated fadeInUp">
              <span className="bold">Tools: </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="caseStudyBody">
        <div className="sectionText">
          <ScrollAnimation
            delay="1000"
            animateIn="fadeInLeft"
            animateOnce="true"
          >
            <h4>Overview</h4>
            <p>
              For this project, a team of five students and I were tasked with
              answering a design problem: what does it mean to live
              autonomously? Our solution was a modular home constructed entirely
              by users, which we visualized using virtual reality and showcased
              at the year-end show at George Brown College.
            </p>
          </ScrollAnimation>
        </div>

        <div className="sectionText">
          <ScrollAnimation
            delay="1500"
            animateIn="fadeInRight"
            animateOnce="true"
          >
            <h4>The Project</h4>
            <p>
              ModPod was the final project one of the classes in my second year
              at George Brown. The class revolved around immersive environments
              (IE); either digital environments (virtual, augmented, or mixed
              reality), or physical (installations). We had a general theme —
              autonomous living. What we had to do was create an immersive
              environment related to this theme that could be shown at the
              year-end show.
            </p>
          </ScrollAnimation>
        </div>

        <div className="mainText modpodCase">
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <h5>Research</h5>
              <p>
                The early stages of the project focused on learning more about
                the subject, and trying to narrow down what we could focus our
                IE on. We landed on nomadic living as an interesting precedent
                that we could learn more about. The group split up and
                researched different nomadic groups throughout time to learn
                more about their lifestyle.
              </p>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation delay="500" animateIn="fadeIn" animateOnce="true">
              <img src={modpod1} alt='modpod'></img>
            </ScrollAnimation>
          </div>
        </div>

        <div className="mainText modpodCase">
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <img src={modpod2} alt='modpod'></img>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation delay="500" animateIn="fadeIn" animateOnce="true">
              <p>
                We knew we wanted to do something related to nomadic living, but
                what we need to know was what problem with autonomous living
                were we trying to solve?
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <p>
                We did a workshop in which we asked ourselves 100 questions
                related to the topic. That led us to some insights about living
                in the digital age: young people cannot afford housing. This is
                what we wanted to address, how might we give young professionals
                the means to live autonomously in a shifting environment when a
                permanent residence is not economically viable?
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <p>
                From this question we began development on the concept of{" "}
                <span className="bold">ModPod</span> — a modular, affordable and
                portable home system for digital nomads.
              </p>
            </ScrollAnimation>
          </div>
        </div>

        <div className="mainText modpodCase">
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <h5>Development</h5>
              <p>
                The design of the home went through a number of iterations, from
                a geodesic dome to more traditional yurt, to an angular abstract
                design. Eventually, due to time constraints and practicality of
                the project, we decided on a more basic, cube like structure.
                The house would be constructed using a number of square-shaped
                panels that connect together. Each panel would have specialized
                function, such as screen, heating, battery, etc.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <p>
                We had intended to actually build the structure as an
                installation to be shown at the year-end show. However, looking
                at the skills of the group members and the practicality of how
                it would work in the real world, we were advised to create the
                IE using virtual reality. The user journey would be the same,
                however it would be represented virtually.
              </p>
              <p>
                Having never worked in virtual reality, the task seemed
                challenging, but also a great opportunity. We talked to some of
                the game design professors and learned we would use Unreal
                Engine to build the environment.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <p>
                We began first with what we knew; modelling ModPod and other
                assets using Maya. This included the frame of the home,
                different panels, as well as other objects that would exist in
                the virtual environment, such as chairs, tables, etc. We also
                started working on what the system interface would look like and
                how we could guide users during the experience.
              </p>
              <p>
                Creating the environment in Unreal was definitely the most
                challenging part of this project; it seemed like we had a learn
                this whole, complex program in only a matter of a few weeks.
                Luckily the game developments profs were helpful, and there is a
                lot of information available in the form of tutorials and
                documentation online.
              </p>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <img src={modpod3} alt='modpod'></img>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <img src={modpod4} alt='modpod'></img>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <img src={modpod5} alt='modpod'></img>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <img src={modpod6} alt='modpod'></img>
            </ScrollAnimation>
          </div>
        </div>

        <div className="mainText modpodCase">
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <h5>Presentation</h5>
              <p>
                The VR experience consisted of guiding the user through the
                purchase and construction of their modular home. The panels
                would spawn after the user interacted with the virtual
                interface, which could be manipulated using the VR controls.
                Users could grab panels and place them on the frame of the
                ModPod, which would snap them into place. Essentially, the user
                was building their own home with preferred panels in the virtual
                environment.
              </p>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <img src={modpod7} alt='modpod'></img>
            </ScrollAnimation>
            <ScrollAnimation delay="500" animateIn="fadeIn" animateOnce="true">
              <img src={modpod8} alt='modpod'></img>
            </ScrollAnimation>
            <ScrollAnimation delay="1000" animateIn="fadeIn" animateOnce="true">
              <img src={modpod9} alt='modpod'></img>
            </ScrollAnimation>
            <ScrollAnimation delay="1500" animateIn="fadeIn" animateOnce="true">
              <img src={modpod10} alt='modpod'></img>
            </ScrollAnimation>
          </div>
        </div>

        <div className="sectionText">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
            <h4>Challenges</h4>
            <p>
              One of the main problems we had when creating this environment was
              working with a brand new program, Unreal Engine, on a tight
              deadline. All members of the group were designers first, and had
              limited knowledge of building VR games. There was a lot of stress
              figuring out how to make it work, but luckily putting our heads
              together and working together with other resources allowed us to
              create something close to the original concept we had. It was not
              perfect, of course, there were some glitches and the functionality
              could have been better fleshed out, and I found that many people
              were more interested in just moving around and grabbing things in
              virtual reality than the actual ‘narrative’ of our immersive
              environment.
            </p>
          </ScrollAnimation>
        </div>

        <div className="sectionText">
          <ScrollAnimation animateIn="fadeInRight" animateOnce="true">
            <h4>Outcomes</h4>
            <p>
              The project was well-received at the year-end show. We set up the
              installation in the morning and many people came by to try out the
              virtual environment. I was proud and amazed at what we were able
              to put out in such a short period, on top of our other projects of
              the school year. I learned a lot about Unreal in particular, which
              was interesting to me because as interaction designers I believe
              having knowledge of this technology like this is incredibly
              important to stay relevant in the future. I also managed to work
              on my time-management and teamwork skills; having a limited time
              and a large team, you learn quickly to split up the workload and
              play to people’s strengths.
            </p>
          </ScrollAnimation>
        </div>
      </div>

      <div className="bottomNav">
        <div>
          <a href="./portfolio">
            <h6>Previous</h6>
            <p>Portfolio Site</p>
          </a>
        </div>
        <div>
          <a href="./blade">
            <h6>Next</h6>
            <p>Blade Branding; Interactive Map</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modpod;
