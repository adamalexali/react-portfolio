import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pfp from '../images/branding/pfp-optimized.png';
import Timeline from './Timeline';
import '../CSS/Home.css';

class Home extends Component {
  render() {
    return (
      <div id='homeBio' className='sectionContainer'>
        <div id='homePicture'>
          <img src={pfp} alt='' />
        </div>
        <div className='textBlock' id='homeBioText'>
          <div className='highlight'>
            <h1>Hello!</h1>
          </div>
          <p>
            I'm Adam&nbsp;
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
          <Link to='/projects'>
            <button className='btn' name='projectsBtn'>
              projects
            </button>
          </Link>
        </div>
        <Timeline />
        <div id='resumeDiv'>
          <a
            href='https://drive.google.com/file/d/1Xn_QFFjWepjgMzi8GRgmHU3DioHFN8vP/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='btn'>resume</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
