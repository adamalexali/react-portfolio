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
<<<<<<< HEAD
            <ProjectCard
              title='anamorphic&nbsp;ar'
              url='anamorphic'
              img={anamorphicImg}
=======
            <ProjectCard title='modpod' url='modpod' img={placeholder} />
          </div>
          <div>
            <ProjectCard
              title='anamorphic&nbsp;ar'
              url='unavailable'
              img={placeholder}
>>>>>>> 088c5c7ed7052cfee96d101ccf0b75d0442ebeac
            />
          </div>
          <div>
            <ProjectCard
              title='ar&nbsp;measuring'
              url='measure'
<<<<<<< HEAD
              img={measureImg}
            />
          </div>
          <div>
            <ProjectCard title='modpod' url='modpod' img={modpodImg} />
=======
              img={placeholder}
            />
          </div>
          <div>
            <ProjectCard
              title='linkmentalhealth'
              url='unavailable'
              img={placeholder}
            />
>>>>>>> 088c5c7ed7052cfee96d101ccf0b75d0442ebeac
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
