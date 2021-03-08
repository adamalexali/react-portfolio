import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/MainNav.css';
import logo from '../images/branding/logo-alt.svg';

class MainNav extends Component {
  render() {
    return (
      <div id='mainNav'>
        <nav className='navbar navbar-expand-md'>
          <Link to='/' className='nav-link'>
            <img src={logo} alt='Logo' id='siteLogo' />
          </Link>
        </nav>
      </div>
    );
  }
}

export default MainNav;
