import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modpod.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import modpod1 from './images/modpod/modpod1.png';

const Modpod = () => {
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

      {/* video container. Responsiveness is tricky, requires setting padding based on aspect ratio; the container position to relative; and the iframe position to absolute 🙃 */}
      <div className='iframe-container'>
        <iframe
          title='MODPOD demo'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/2Xj3mUAu9lQ'
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Modpod;
