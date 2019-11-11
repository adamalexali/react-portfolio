import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, img }) => {
  return (
    <a href={`./${title}`}>
      <div className="cardContainer">
        <div>
          <img src={img} alt={title}></img>
        </div>
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
