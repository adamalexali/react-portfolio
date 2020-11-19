import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/ExperienceCard.css';

const ExperienceCard = ({ client, date, role, desc }) => {
  return (
    // <Link to={`/projects/${title}`}>
    <div className='experienceBlock'>
      <h3>{client}</h3>
      <h5>{date}</h5>
      <h4>{role}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default ExperienceCard;
