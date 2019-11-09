import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, img }) => {
  return (
    <div className="cardContainer">
      <div>
        <img src={img} alt={title}></img>
      </div>
      <div>
        <a href="./Modpod">
          <h1>{title}</h1>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
