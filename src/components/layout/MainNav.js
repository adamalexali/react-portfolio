import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import logo from '../../images/logos&icons/logo2-optimized.png';

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
              <li id='homeNavLink'>
                <Link to='/'>
                  <span role='img' aria-label='house'>
                    🏠
                  </span>{' '}
                  home
                </Link>
              </li>
              <li id='projectsNavLink'>
                <Link to='/projects'>
                  <span role='img' aria-label='wrench'>
                    🛠
                  </span>{' '}
                  projects
                </Link>
              </li>
              <li id='explorationsNavLink'>
                <Link to='/explorations'>
                  <span role='img' aria-label='earth'>
                    🌎
                  </span>{' '}
                  explorations
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MainNav;
