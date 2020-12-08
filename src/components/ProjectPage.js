import React from 'react';
import '../CSS/ProjectPage.css';

// const projectDesc = {
//   modpod: {
//     desc:
//       'MODPOD. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum eum autem corrupti dolorem at provident qui atque officiis quasi quas nesciunt molestias? Quia provident odio placeat doloremque deleniti vel.',
//   },
//   echo: {
//     desc:
//       'ECHO. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum eum autem corrupti dolorem at provident qui atque officiis quasi quas nesciunt molestias? Quia provident odio placeat doloremque deleniti vel.',
//   },
//   measure: {
//     desc:
//       'AR MEASURE APP. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum eum autem corrupti dolorem at provident qui atque officiis quasi quas nesciunt molestias? Quia provident odio placeat doloremque deleniti vel.',
//   },
//   linkmentalhealth: {
//     desc:
//       'LinkMentalHealth. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum eum autem corrupti dolorem at provident qui atque officiis quasi quas nesciunt molestias? Quia provident odio placeat doloremque deleniti vel.',
//   },
// };

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
