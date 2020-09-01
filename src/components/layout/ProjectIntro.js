import React from 'react';
import '../layout/CSS/ProjectPage.css';

const ProjectIntro = (props) => {
  return (
    <div className='container'>
      <h1 id='title' className='animateSlow'>
        {props.title}
      </h1>
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
