import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blade.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import blade1 from './images/blade/blade1.png';

const Blade = () => {
  return (
    <div className='container'>
      <div>
        <Navbar sticky='top'>
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            className='justify-content-end'
          />
          <Nav className='flex-column justify-content-end'>
            <Nav.Link href='./' className='navLink'>
              <i class='fas fa-arrow-left'></i>
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default Blade;
