import React, { Component } from 'react';
// import '../../App.css';

export class Footer extends Component {
  render() {
    return (
      <div id='footerDiv'>
        <div className='socials'>
          <ul>
            <li>
              <a
                className='sm-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/adamalexali/'
              >
                <i className='fab sm-icon fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a
                className='sm-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://angel.co/u/adamalexali'
              >
                <i className='fab sm-icon fa-angellist'></i>
              </a>
            </li>
            <li>
              <a
                className='sm-link'
                target='_blank'
                rel='noopener noreferrer'
                href='mailto:adamalexali@gmail.com'
              >
                <i className='fas sm-icon fa-envelope'></i>
              </a>
            </li>
            <li>
              <a
                className='sm-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/adamalexali'
              >
                <i className='fab sm-icon fa-github'></i>
              </a>
            </li>
            <li>
              <a
                className='sm-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.twitter.com/adamalexali'
              >
                <i className='fab sm-icon fa-twitter'></i>
              </a>
            </li>
          </ul>
        </div>
        <p>
          made with&nbsp;
          <span role='img' aria-label='heart'>
            ♥
          </span>
          &nbsp;by Adam
        </p>
      </div>
    );
  }
}

export default Footer;
