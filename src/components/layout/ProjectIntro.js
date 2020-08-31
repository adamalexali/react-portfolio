import React from 'react';

const ProjectIntro = (props) => {
  return (
    <div className='intro container'>
      <h1>{props.title}</h1>
      <img
        src={props.mainImg}
        alt={`${props.title} Banner`}
        id='mainImg'
        className=''
      ></img>
      <h1>{props.subtitle}</h1>
    </div>
  );
};

export default ProjectIntro;
