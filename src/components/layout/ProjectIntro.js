import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import '../layout/CSS/ProjectPage.css';

const ProjectIntro = (props) => {
  return (
    <div id='projectIntroDiv' className='container'>
      <div id='titleDiv'>
        {/* <Parallax y={['50px', '0px']}> */}
        <h1 id='title'>{props.title}</h1>
        {/* </Parallax> */}
      </div>
      <div id='subtitleDiv'>
        {/* <Parallax y={['0px', '50px']}> */}
        <h2 id='subtitle'>{props.subtitle}</h2>
        {/* </Parallax> */}
      </div>
      <img
        id='projectBanner'
        src={props.mainImg}
        className='full'
        alt={`${props.title} Banner`}
      ></img>
    </div>
  );
};

export default ProjectIntro;
