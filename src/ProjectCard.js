import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ title, img }) => {
  return (
    <Link target='_top' to={`/${title}`}>
      <div className='cardContainer'>
        <div>
          <img src={img} alt={title}></img>
        </div>
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
