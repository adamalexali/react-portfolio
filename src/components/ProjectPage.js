import React from 'react';
import '../CSS/ProjectPage.css';

const ProjectPage = ({ title, date }) => {
  return (
    <div>
      <div className='h2Highlight'>
        <h2>{title}</h2>
      </div>
      <h3>{date}</h3>
    </div>
  );
};

export default ProjectPage;
