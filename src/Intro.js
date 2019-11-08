import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "./Intro.css";

const Intro = () => {
  return (
    <ScrollAnimation animateIn='fadeIn'>
    <div>
      <div className="introduction section">
        <h4 className="serif">Hey! My name is</h4>
        <h1 className="bold">Adam Ali</h1>
        <h3 className="important serif subtitle">I'm a developer.</h3>
      </div>
    </div>
    </ScrollAnimation>
  );
};

export default Intro;
