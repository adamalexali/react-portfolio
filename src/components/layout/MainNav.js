import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import logo from '../../images/logos&icons/logo.png';

class MainNav extends Component {
  render() {
    return (
      <div id='mainNav'>
        <nav>
          <div id='siteLogo'>
            <img src={logo} alt='' />
          </div>
          <div id='navigationLinks'>
            <ul>
              <li>
                <Link to='/'>🏠 home</Link>
              </li>
              <li>
                <Link to='/projects'>🛠 projects</Link>
              </li>
              <li>
                <Link to='/notready'>🌎 explorations</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MainNav;
