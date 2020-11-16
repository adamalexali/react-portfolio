import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import modpodImg from '../../images/projectCards/modpodImg.png';

class Projects extends Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  render() {
    return (
      <div id='allProjects' className='sectionContainer'>
        <div>
          <ProjectCard title='modpod' img={modpodImg} />
        </div>
        <div>
          <ProjectCard title='echo' img={modpodImg} />
        </div>
      </div>
    );
  }
}

export default Projects;
