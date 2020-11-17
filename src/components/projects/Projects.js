import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import modpodImg from '../../images/projectCards/modpodImg.png';

const projectDesc = {
  modpod: {
    desc:
      'MODPOD. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum eum autem corrupti dolorem at provident qui atque officiis quasi quas nesciunt molestias? Quia provident odio placeat doloremque deleniti vel.',
  },
  echo: {
    desc:
      'ECHO. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum eum autem corrupti dolorem at provident qui atque officiis quasi quas nesciunt molestias? Quia provident odio placeat doloremque deleniti vel.',
  },
};

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
          <ProjectCard
            title='modpod'
            img={modpodImg}
            desc={projectDesc.modpod.desc}
          />
        </div>
        <div>
          <ProjectCard
            title='echo'
            img={modpodImg}
            desc={projectDesc.echo.desc}
          />
        </div>
      </div>
    );
  }
}

export default Projects;
