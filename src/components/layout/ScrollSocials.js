import React, { Component } from 'react';
import '../../App.css';

export class ScrollSocials extends Component {
  render() {
    return (
      <div id='scrollSocials'>
        <ul>
          <li>
            <a
              className='sm-link'
              target='_blank'
              href='https://www.linkedin.com/in/adamalexali/'
            >
              <i class='fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a
              className='sm-link'
              target='_blank'
              href='https://github.com/adamalexali'
            >
              <i class='fab fa-github'></i>
            </a>
          </li>
          <li>
            <a
              className='sm-link'
              target='_blank'
              href='mailto:adamalexali@gmail.com'
            >
              <i className='fab fa-google'></i>
            </a>
          </li>
          <li>
            <a
              className='sm-link'
              target='_blank'
              href='https://www.behance.net/adamalexali'
            >
              <i className='fab fa-behance'></i>
            </a>
          </li>
          <li>
            <a
              className='sm-link'
              target='_blank'
              href='https://www.instagram.com/adamalexali/'
            >
              <i className='fab fa-instagram'></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default ScrollSocials;
