import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/ProjectCard.css';

const ProjectCard = ({ title, url, img, desc }) => {
  return (
    <Link
      to={{
        pathname: `/projects/${url}`,
        // projectProps: { title, img, desc },
      }}
    >
      <div className='cardContainer'>
        <div id='projectCardImg'>
          <img src={img} alt={title}></img>
        </div>
        <div id='projectCardHeader'>
          <h4>{title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
