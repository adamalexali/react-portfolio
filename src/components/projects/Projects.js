import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
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
  measure: {
    desc:
      'AR MEASURE APP. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum eum autem corrupti dolorem at provident qui atque officiis quasi quas nesciunt molestias? Quia provident odio placeat doloremque deleniti vel.',
  },
  linkmentalhealth: {
    desc:
      'LinkMentalHealth. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum eum autem corrupti dolorem at provident qui atque officiis quasi quas nesciunt molestias? Quia provident odio placeat doloremque deleniti vel.',
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
      <div>
        <div id='projectsPageSection' className='sectionContainer'>
          <div id='projectsPageHeadline'>
            <div>
              <h2>×</h2>
              <div className='h2Highlight'>
                <h2>projects</h2>
              </div>
            </div>
            <div>
              <p>
                Projects! Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Tempora, alias. Quia ratione at iusto eos? Consequatur
                impedit corrupti quod unde, voluptates repellat expedita?
                Consequatur accusantium facere, commodi fuga est error!
              </p>
            </div>
          </div>
          <div>
            <ProjectCard
              title='modpod'
              img={modpodImg}
              desc={projectDesc.modpod.desc}
            />
          </div>
          <div>
            <ProjectCard
              title='anamorphic&nbsp;ar'
              img={modpodImg}
              desc={projectDesc.echo.desc}
            />
          </div>
          <div>
            <ProjectCard
              title='ar&nbsp;measuring'
              img={modpodImg}
              desc={projectDesc.measure.desc}
            />
          </div>
          <div>
            <ProjectCard
              title='linkmentalhealth'
              img={modpodImg}
              desc={projectDesc.linkmentalhealth.desc}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
