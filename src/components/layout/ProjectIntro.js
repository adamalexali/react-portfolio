import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import '../layout/CSS/ProjectPage.css';

const ProjectIntro = (props) => {
  return (
    <div className='container'>
      <Parallax className='custom-class' y={[-100, 100]} tagOuter='figure'>
        <h1 id='title' className='animateSlow'>
          {props.title}
        </h1>
      </Parallax>
      <img
        src={props.mainImg}
        className='full'
        alt={`${props.title} Banner`}
      ></img>
      <h1 id='subtitle' className='animateMed'>
        {props.subtitle}
      </h1>
    </div>
  );
};

export default ProjectIntro;
