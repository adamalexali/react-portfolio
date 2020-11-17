import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/ProjectCard.css';

const ProjectCard = ({ title, img }) => {
  return (
    // <Link to={`/projects/${title}`}>
    <Link to={`/notready`}>
      <div className='cardContainer'>
        <div>
          <img src={img} alt={title}></img>
        </div>
        <div id='projectDetails'>
          <h2>{title}</h2>
          {/* <ul>
            <li>🥽</li>
            <li>🏫</li>
            <li>👨🏾‍💻</li>
          </ul> */}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
