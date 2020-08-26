import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Projects page has links to the different portfolio pieces. At each new page, there is a back button that links back to this page. Seems to work... don't know how I got it this time?

// App.js has the routes. For each portfolio piece, the path is 'projects/{portfolioPiece}
const Projects = () => {
  return (
    <div className='container'>
      <div>
        <Navbar sticky='top'>
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            className='justify-content-end'
          />
          <Nav className='flex-column justify-content-end'>
            {/* ok... putting two dots before the backslash brings me back to the main page. Guess that works! */}
            <Nav.Link href='../' className='navLink'>
              <i class='fas fa-arrow-left'></i>
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div>
        <a href='/#/projects/blade'>
          <li>Blade</li>
        </a>
        <a href='/#/projects/modpod'>
          <li>Modpod</li>
        </a>
      </div>
    </div>
  );
};

export default Projects;
