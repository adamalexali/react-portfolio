import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/ProjectCard.css';

const ProjectCard = ({ alignment, title, url, img, desc }) => {
  return (
    <div className={`cardContainer ${alignment}`}>
      <Link
        to={{
          pathname: `/projects/${url}`,
          // projectProps: { title, img, desc },
        }}
      >
        <div id='projectCardImg'>
          <img src={img} alt={title}></img>
        </div>
      </Link>
      <div id='projectCardHeader'>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
