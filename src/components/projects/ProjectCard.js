import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/ProjectCard.css';

const ProjectCard = ({ title, img }) => {
  return (
    <Link to={`/projects/${title}`}>
      <div className='cardContainer'>
        <div>
          <img src={img} alt={title}></img>
        </div>
        <div id='projectDetails'>
          <h1>{title}</h1>
          <ul>
            <li>🥽</li>
            <li>🏫</li>
            <li>👨🏾‍💻</li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
