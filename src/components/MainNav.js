import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/MainNav.css';
import logo from '../images/branding/logo-optimized.png';

class MainNav extends Component {
  render() {
    return (
      <div id='mainNav'>
        {/* <nav>
          <div id='siteLogo'>
            <Link to='/'>
              <img src={logo} alt='' />
            </Link>
          </div>
          <div id='navigationLinks'>
            <ul>
              <li id='homeNavLink'>
                <Link to='/'>home</Link>
              </li>
              <li id='projectsNavLink'>
                <Link to='/projects'>projects</Link>
              </li>
              <li id='explorationsNavLink'>
                <Link to='/explorations'>explorations</Link>
              </li>
            </ul>
          </div>
        </nav> */}
        <nav className='navbar navbar-expand-md'>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <img src={logo} alt='Logo' id='siteLogo' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item' data-toggle='collapse'>
                <Link to='/' className='nav-link'>
                  home
                </Link>
              </li>
              <li className='nav-item' data-toggle='collapse'>
                <Link to='/projects' className='nav-link'>
                  projects
                </Link>
              </li>
              <li className='nav-item' data-toggle='collapse'>
                <Link to='/explorations' className='nav-link'>
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
