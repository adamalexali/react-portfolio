import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import '../layout/CSS/ProjectPage.css';

const ProjectIntro = (props) => {
  return (
    <div className='container'>
      <div id='titleDiv'>
        <Parallax y={['100px', '0px']}>
          <h1 id='title'>{props.title}</h1>
        </Parallax>
      </div>
      <img
        id='projectBanner'
        src={props.mainImg}
        className='full'
        alt={`${props.title} Banner`}
      ></img>
      <div id='subtitleDiv'>
        <Parallax y={['0px', '50px']}>
          <h1 id='subtitle'>{props.subtitle}</h1>
        </Parallax>
      </div>
    </div>
  );
};

export default ProjectIntro;
