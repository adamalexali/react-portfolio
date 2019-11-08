import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, img }) => {
  return (
    <div className="cardContainer">
      <div>
        <img
          src="https://images.unsplash.com/photo-1573169128228-31137c599d3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"
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
