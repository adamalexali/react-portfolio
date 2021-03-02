import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/ProjectCard.css';

// let numbers = ['one', 'two', 'three'];
// let listItems = numbers.map((number) => <li>{number}</li>);

const ProjectCard = ({ alignment, title, url, img, desc, tags }) => {
  // let projectTags = tags;
  let listTags = tags.map((tag) => <li className='projectTags'>{tag}</li>);

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
        <h2>{title}</h2>
        <p>{desc}</p>
        <ul>{listTags}</ul>
      </div>
    </div>
  );
};

export default ProjectCard;
