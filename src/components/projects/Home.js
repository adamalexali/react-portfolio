import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pfp from '../../images/pfp-optimized.jpg';
import '../CSS/Home.css';

class Home extends Component {
  render() {
    return (
      <div id='homeBio' className='sectionContainer'>
        <div id='homePicture'>
          <img src={pfp} alt='' />
        </div>
        <div id='homeBioText'>
          <div className='h2Highlight'>
            <h2>Hello!</h2>
          </div>
          <p>
            <span role='img' aria-label='wave-emoji'>
              👋
            </span>
            &nbsp;Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore.
          </p>
        </div>
        <div id='homeBioLinkToProjects'>
          <Link to='/projects' id='homeBioProjectsLink'>
            🛠 projects &rarr;
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
