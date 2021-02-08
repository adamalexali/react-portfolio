import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import anamorphicImg from '../images/projectCards/anamorphicARimg.png';
import measureImg from '../images/projectCards/measureImg';
import modpodImg from '../images/projectCards/modpodImg.png';
import lotusLogo from '../images/projectCards/lotus_logo.png';
import lmhLogo from '../images/projectCards/lmh_logo.png';
import echoLogo from '../images/projectCards/echo_logo.png';

class Projects extends Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  render() {
    return (
      <div>
        <div id='projectsPageSection' className='sectionContainer'>
          <div className='textBlock'>
            <div className='h2Highlight'>
              <h2>Projects</h2>
            </div>
            <div>
              <p>
                Here you'll find a collection of portfolio pieces. These
                projects go in depth of my design process and solutions for
                creating digital experiences on a variety of platforms. Many of
                these projects involved working with a team on projects than
                spanned several months. Click on each card to learn more!
              </p>
            </div>
          </div>
          <div>
            <ProjectCard
              alignment='left'
              title='anamorphic&nbsp;ar'
              url='anamorphic'
              img={anamorphicImg}
              desc='An augmented reality art piece looking back on the year from a different perspective.'
            />
            <ProjectCard
              alignment='right'
              title='linkmentalhealth'
              url='linkmentalhealth'
              img={lmhLogo}
              desc='A platform aimed at connected employers, workers, and students with personalized mental health services.'
            />
            <ProjectCard
              alignment='left'
              title='echo'
              url='echo'
              img={echoLogo}
              desc='A offline, decentralized communications and file-sharing network for the imagined dystopian cyberpunk future.'
            />
            <ProjectCard
              alignment='right'
              title='ar&nbsp;measuring'
              url='measure'
              img={measureImg}
              desc='Exploring a proof-of-concept of the future of e-commerce and augmented reality integration for interior design.'
            />
            <ProjectCard
              alignment='left'
              title='modpod'
              url='modpod'
              img={modpodImg}
              desc='Looking at solutions for "what it means to live autonomously in the digital age" through a virtual reality demo.'
            />
            <ProjectCard
              alignment='right'
              title='lotus'
              url='lotus'
              img={lotusLogo}
              desc='A visual design exploration into mindfulness meditation interface design.'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
