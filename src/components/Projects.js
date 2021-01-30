import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import anamorphicImg from '../images/projectCards/anamorphicImg';
import measureImg from '../images/projectCards/measureImg';
import modpodImg from '../images/projectCards/modpodImg.png';

// const projectDesc = {
//   modpod: {
//     desc:
//       'MODPOD. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum eum autem corrupti dolorem at provident qui atque officiis quasi quas nesciunt molestias? Quia provident odio placeat doloremque deleniti vel.',
//   },
//   echo: {
//     desc:
//       'ECHO. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum eum autem corrupti dolorem at provident qui atque officiis quasi quas nesciunt molestias? Quia provident odio placeat doloremque deleniti vel.',
//   },
//   measure: {
//     desc:
//       'AR MEASURE APP. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum eum autem corrupti dolorem at provident qui atque officiis quasi quas nesciunt molestias? Quia provident odio placeat doloremque deleniti vel.',
//   },
//   linkmentalhealth: {
//     desc:
//       'LinkMentalHealth. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum eum autem corrupti dolorem at provident qui atque officiis quasi quas nesciunt molestias? Quia provident odio placeat doloremque deleniti vel.',
//   },
// };

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
              title='anamorphic&nbsp;ar'
              url='anamorphic'
              img={anamorphicImg}
              desc='Myself along with other students of the interaction design
              program participated in the annual year-end show for the School of
              Design. We aimed to answer the question, “What does it mean to
              live autonomously?”. Our solution was a virtual reality immersive
              experience that demonstrates a concept for a modular home. My role
              involved defining the user experience, designing the interface,
              presenting the design solutions to stakeholders, and facilitating
              the experience for visitors.'
            />
          </div>
          <div>
            <ProjectCard
              title='ar&nbsp;measuring'
              url='measure'
              img={measureImg}
            />
          </div>
          <div>
            <ProjectCard
              title='modpod'
              url='modpod'
              img={modpodImg}
              desc='Myself along with other students of the interaction design
              program participated in the annual year-end show for the School of
              Design. We aimed to answer the question, “What does it mean to
              live autonomously?”. Our solution was a virtual reality immersive
              experience that demonstrates a concept for a modular home. My role
              involved defining the user experience, designing the interface,
              presenting the design solutions to stakeholders, and facilitating
              the experience for visitors.'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
