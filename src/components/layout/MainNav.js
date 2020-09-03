import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class MainNav extends Component {
  render() {
    return (
      <div id='mainNav'>
        <nav>
          <h1>{this.props.title}</h1>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MainNav;
