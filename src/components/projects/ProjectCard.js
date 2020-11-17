import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/ProjectCard.css';

const ProjectCard = ({ title, img, desc }) => {
  return (
    // <Link to={`/projects/${title}`}>
    <Link to={`/notready`}>
      <div className='cardContainer'>
        <div id='projectCardHeader'>
          <h2>×</h2>
          <div className='h2Highlight'>
            <h2>{title}</h2>
          </div>
        </div>
        <div id='projectCardImg'>
          <img src={img} alt={title}></img>
        </div>
        <div id='projectDetails'>
          <p>{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
