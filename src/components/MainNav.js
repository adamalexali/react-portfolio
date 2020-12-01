import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import '../../App.css';
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
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='#'>
            Navbar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  Home <span class='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Features
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Pricing
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Dropdown link
                </a>
                <div
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MainNav;
