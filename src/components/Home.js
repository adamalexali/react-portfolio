import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pfp from '../images/branding/pfp-optimized.png';
import '../CSS/Home.css';

class Home extends Component {
  render() {
    return (
      <div id='homeBio' className='sectionContainer'>
        <div id='homePicture'>
          <img src={pfp} alt='' />
        </div>
        <div className='textBlock' id='homeBioText'>
          <div className='h2Highlight'>
            <h2>Hello!</h2>
          </div>
          <p>
            <span role='img' aria-label='wave-emoji'>
              👋
            </span>
            &nbsp;I'm a Toronto-based digital experience designer. I have a keen
            interest in creating meaningful user experiences for the web,
            mobile, &amp; beyond!
          </p>
          <p>
            Within the past few years, I've had the opportunity to work on the
            conceptualization, research, design, and development of a number of
            digital projects, during which I've drawn from and honed my skills
            in various disciplines — including graphic design, web development,
            motion graphics, 3D modeling, immersive XR, &amp; data
            visualization.
          </p>
          <p>
            I am constantly learning, as I find having a foundation in a diverse
            set of fields allows me to apply knowledge and understand problems
            in unique ways. I use what I've learned to explore the relationships
            between people &amp; technology and in doing so, design better
            products/systems/services.
          </p>
        </div>
        <div id='homeBioLinkToProjects'>
          <Link to='/projects'>projects &rarr;</Link>
        </div>
        <div className='textBlock timeline' id='homeBioExperience'>
          {/* <div className='h2Highlight'>
            <h2>Experience</h2>
          </div>
          <div className='experienceBlock'>
            <h3>GBC AR + Data project</h3>
            <h4>Experience designer</h4>
            <h5>(Sep 2020 - Dec 2020)</h5>
            <p>
              My most recent major school project involved creating an immersive
              augmented reality experience that utilized open source data. A
              solo project; my tasks included research &amp; ideation, design of
              interactive prototypes and user flows, collecting &amp; modeling
              assets, and designing &amp; developing the AR experience for iOS.
            </p>
          </div>

          <div className='experienceBlock'>
            <h3>GBC Research &amp; Innovation</h3>
            <h4>Product designer</h4>
            <h5>(Sep 2019 - May 2020)</h5>
            <p>
              A small team of designers and I were tasked with designing an
              augmented reality measuring application and eventually building a
              functional prototype. I was also responsible for presenting the
              design solutions to the client &amp; stakeholders.
            </p>
          </div>

          <div className='experienceBlock'>
            <h3>LinkMentalHealth</h3>
            <h4>Front-end developer</h4>
            <h5>(Jan 2020 - Apr 2020)</h5>
            <p>
              Co-op placement. I was responsible for working with the team to
              understand users by refining user flows, creating wireframes, and
              conducting user tests. I also worked with the visual designer
              &amp; the back-end developers to build the responsive website.
            </p>
          </div>

          <div className='experienceBlock'>
            <h3>Blade Creative Branding Inc.</h3>
            <h4>Front-end developer</h4>
            <h5>(Sep 2019 - Nov 2019)</h5>
            <p>
              Aided in implementing an interactive web feature for visualizing
              floor plans of a new condominium. Tasks included research &amp;
              defining client goals, conducting a competitive analysis, coding
              the functionality, and finally implementing it into their
              WordPress site.
            </p>
          </div>

          <div className='experienceBlock'>
            <h3>GBC School of Design</h3>
            <h4>Experience designer</h4>
            <h5>(Sep 2018 - Apr 2019)</h5>
            <p>
              Myself along with other students of the Interatction Design
              program participated in the annual year-end show for the School of
              Design. We aimed to answer the question, “What does it mean to
              live autonomously?”. Our solution was a virtual reality immersive
              experience that demonstrates a concept for a modular home. My role
              involved defining the user experience, designing the interface,
              presenting the design solutions to stakeholders, and facilitating
              the experience for visitors.
            </p>
          </div> */}

          <div className='content leftSide' id='timelineOne'>
            <h3>2021</h3>
            <h4>Ontario Black History Society</h4>
            <p>graphic designer</p>

            <h4>Canamax Ltd.</h4>
            <p>front-end developer</p>
          </div>
          <div className='content rightSide' id='timelineTwo'>
            <h3>2020</h3>
            <h4>GBC AR + Data project</h4>
            <p>experience designer</p>
          </div>

          <div className='content leftSide' id='timelineThree'>
            <h3>2019</h3>
            <h4>Ontario Black History Society</h4>
            <p>graphic designer</p>

            <h4>Canamax Ltd.</h4>
            <p>front-end developer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
