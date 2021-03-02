import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import anamorphicImg from '../images/projectCards/anamorphicARimg.png';
import measureImg from '../images/projectCards/measureImg.png';
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
            <div className='highlight'>
              <h1>Projects</h1>
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
              title='Anamorphic&nbsp;AR'
              url='anamorphic'
              img={anamorphicImg}
              desc='An augmented reality art piece looking back on the year from a different perspective.'
              tags={['3D', 'Cinema 4D', 'Unity', 'XR']}
            />
            <ProjectCard
              alignment='right'
              title='LinkMentalHealth'
              url='linkmentalhealth'
              img={lmhLogo}
              desc='A platform aimed at connected employers, workers, and students with personalized mental health services.'
              tags={['Bootstrap', 'CSS', 'HTML', 'JS', 'UX']}
            />
            <ProjectCard
              alignment='left'
              title='ECHO'
              url='echo'
              img={echoLogo}
              desc='A offline, decentralized communications and file-sharing network for the imagined dystopian cyberpunk future.'
              tags={['CSS', 'HTML', 'JS', 'Raspberry Pi', 'UI']}
            />
            <ProjectCard
              alignment='right'
              title='AR&nbsp;Measuring'
              url='measure'
              img={measureImg}
              desc='Exploring a proof-of-concept of the future of e-commerce and augmented reality integration for interior design.'
              tags={['UI', 'Unity', 'UX', 'XR']}
            />
            <ProjectCard
              alignment='left'
              title='MODPOD'
              url='modpod'
              img={modpodImg}
              desc='Looking at solutions for "what it means to live autonomously in the digital age" through a virtual reality demo.'
              tags={['Blender', 'Unreal', 'UX', 'XR']}
            />
            {/* <ProjectCard
              alignment='right'
              title='lotus'
              url='lotus'
              img={lotusLogo}
              desc='A visual design exploration into mindfulness meditation interface design.'
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
