import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, img }) => {
  return (
    // if using HashRouter instead of BrowserRouter, change this line:
    // href={`/#/${title}`}
    // <a target='_top' href={`/${title}`}>
    <a target='_top' href={`/#/${title}`}>
      <div className='cardContainer'>
        <div>
          <img src={img} alt={title}></img>
        </div>
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
