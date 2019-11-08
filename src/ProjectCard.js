import React from "react";
import "./ProjectCard.css";
// import ScrollAnimation from "react-animate-on-scroll";

const ProjectCard = ({ title, img }) => {
  return (
    <div className="cardContainer">
        <div>
          <img
            src={img}
            alt={title}
          ></img>
        </div>
        <div>
          <h1>{title}</h1>
        </div>
    </div>
  );
};

export default ProjectCard;
