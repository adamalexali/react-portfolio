import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Explorations extends Component {
  render() {
    return (
      <div>
        <h1>Explorations</h1>
        <p>Smaller projects where I explore a concept or tool!</p>
        {/* <div>
          <Link to={'/explorations/modpod'}>Modpod</Link>
          <Link to={'/explorations/echo'}>ECHO</Link>
        </div> */}
      </div>
    );
  }
}

export default Explorations;
