import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/ProjectCard.css';

const ExplorationsCard = ({ title, url, img, desc }) => {
  return (
    <Link to={`/unavailable`}>
      <div className='cardContainer'>
        <div id='projectCardImg'>
          <img src={img} alt={title}></img>
        </div>
        <div id='projectCardHeader'>
          <h4>{title}</h4>
        </div>
        {/* <div id='projectDetails'>
          <p>{desc}</p>
        </div> */}
      </div>
    </Link>
  );
};

export default ExplorationsCard;
