import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './Portfolio.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ScrollAnimation from 'react-animate-on-scroll';

import portfolio1 from './images/portfolio/portfolio1.png';
import portfolio2 from './images/portfolio/portfolio2.png';
import portfolio3 from './images/portfolio/portfolio3.png';
import portfolio4 from './images/portfolio/portfolio4.png';

const Portfolio = () => {
  return (
    <div className='caseStudyContainer section'>
      <div>
        <Navbar sticky='top'>
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            className='justify-content-end'
          />
          <Nav className='flex-column justify-content-end'>
            <Nav.Link href='./' className='navLink'>
              <i class='fas fa-arrow-left'></i>
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div className='caseStudyTitle'>
        <h1 className='bold important animated fadeInDown'>Portfolio Site</h1>
        <div className='subtitle'>
          <h2 className='serif animated fadeInUp'>
            <span className='bold'>Role: </span>UX / UI designer; developer
          </h2>
          <div className='tools'>
            <h2 className='serif animated fadeInUp'>
              <span className='bold'>Tools: </span>HTML, CSS, JS, Bootstrap,
              React
            </h2>
          </div>
        </div>
      </div>

      <div className='caseStudyBody'>
        <div className='sectionText'>
          <ScrollAnimation
            // delay="1000"
            animateIn='fadeInLeft'
            animateOnce='true'
          >
            <h4>Overview</h4>
            <p>
              I decided to create my own website to showcase my design and
              develop work. The result is this -- the website you’re reading
              this on! I created the site using create-react-app, and I intend
              to update it as I continue on my learning journey!
            </p>
          </ScrollAnimation>
        </div>

        <div className='sectionText'>
          <ScrollAnimation animateIn='fadeInRight' animateOnce='true'>
            <h4>The Project</h4>
            <p>
              This started as a personal project intended to teach myself web
              development, which has turned into a showcase of my work and
              learning journey. What follows is the process I took when
              designing and developing this site. As I improve and add to the
              site, I’ll update this page!
            </p>
          </ScrollAnimation>
        </div>

        <div className='mainText portfolioCase'>
          <div>
            <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
              <h5>Ideation</h5>
              <p>
                I always knew I wanted to create a personal website from
                scratch, long before I actually knew how to do it. I started
                teaching myself JavaScript about two years ago, after taking
                interface development the summer of my first year at George
                Brown College. I took a deep-dive into web development and have
                been obsessed ever since.
              </p>
              <p>
                I took a design approach at first when thinking about my
                website, starting with simple sketches of what I would like it
                to look like. The concept has changed much over the years as
                I’ve learned as a designer and developer, as well as drawing
                inspiration from others online.
              </p>
              {/* </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true"> */}
              <p>
                I also have a lot of ideas of what I’d like to include once I
                learn more -- such as dynamic animations, blog posts, and
                interactive elements. Check back soon!
              </p>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation delay='500' animateIn='fadeIn' animateOnce='true'>
              <a href={portfolio1} target='_blank'>
                <img alt='portfolioImg' src={portfolio1}></img>
              </a>
            </ScrollAnimation>
          </div>
        </div>

        <div className='mainText portfolioCase'>
          <div>
            <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
              <a href={portfolio2} target='_blank'>
                <img alt='portfolioImg' src={portfolio2}></img>
              </a>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation delay='500' animateIn='fadeIn' animateOnce='true'>
              <h5>Development</h5>
              <p>
                I started developing during the summer of 2019, as a project I
                could do while I was off school. Having recently learned CSS
                Grid, I created a basic grid layout with four sections;
                Introduction, About Me, Projects, and Contact. I using Grid to
                be the most intuitive way to create web pages, as I rely on
                grids when I’m designing.
              </p>
            </ScrollAnimation>
          </div>
        </div>

        <div className='mainText portfolioCase'>
          <div>
            <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
              <p>
                I used the same color scheme that I used from my resume I
                designed earlier that year. I wanted to keep the layout
                minimalistic and clean, as I strongly believe in quality over
                quantity.
              </p>
              <p>
                The layout was nice, maybe a bit wordy -- but I found at that
                time I didn’t have a lot of interesting projects to include on
                my site, nor did it really showcase my JavaScript capability;
                only my HTML + CSS skills.
              </p>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
              <a href={portfolio3} target='_blank'>
                <img alt='portfolioImg' src={portfolio3}></img>
              </a>
            </ScrollAnimation>
          </div>
        </div>

        <div className='mainText portfolioCase'>
          <div>
            <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
              <p>
                During this time, I had also been experimenting with React, and
                saw its potential in my web development process. I had followed
                some tutorials and made some basic projects, and eventually I
                decided to include React in my updated portfolio site.
              </p>
              <p>
                I used create-react-app as the base, and built components from
                there.
              </p>
              <p>
                I still used CSS Grid as the layout tool, mostly because I was
                most comfortable with it. But it was here that I started look at
                public React components that could help me do a lot of
                interesting things on my site, like style and animate
                components.
              </p>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
              <a href={portfolio4} target='_blank'>
                <img alt='portfolioImg' src={portfolio4}></img>
              </a>
            </ScrollAnimation>
          </div>
        </div>

        <div className='sectionText'>
          <ScrollAnimation animateIn='fadeInLeft' animateOnce='true'>
            <h4>Challenges</h4>
            <p>
              The biggest challenge I’ve faced was getting over the learning
              curve of React, but once you get the hang of it you can do some
              really incredible things. Web development in general can often
              feel overwhelming with the sheer volume of information that you
              feel you need to learn before starting anything, but I’ve found
              through this project and my various side projects I’ve developed,
              that just starting and figuring it out as you go is really the
              best way to learn. I still get confused from time to time, but
              thankfully the community surrounding web development is so helpful
              that there is always a video or article explaining the concept I
              am struggling with, and I’m happy to be apart of that community.
            </p>
          </ScrollAnimation>
        </div>
        <div className='sectionText'>
          <ScrollAnimation animateIn='fadeInRight' animateOnce='true'>
            <h4>Outcomes</h4>
            <p>
              This website was really a crash course in React development for
              me, I learned a lot about how React works and the ways in which to
              use components. I still struggle with the idea of ‘state’ but that
              is the next step I hope to tackle in this process.
            </p>
          </ScrollAnimation>
        </div>
      </div>
      <div className='bottomNav'>
        <div>
          <a href='./arc'>
            <h6>Previous</h6>
            <p>ARC Travel - Branding</p>
          </a>
        </div>
        <div>
          <a href='./modpod'>
            <h6>Next</h6>
            <p>ModPod Immersive Environment</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
