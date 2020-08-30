import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Projects extends Component {
  render() {
    return (
      <div>
        <h1>Adam's portfolio pieces</h1>
        <p>Click on one to learn more</p>
        <div>
          <Link to={'/projects/modpod'}>Modpod</Link>
          <Link to={'/projects/echo'}>ECHO</Link>
        </div>
      </div>
    );
  }
}

export default Projects;
