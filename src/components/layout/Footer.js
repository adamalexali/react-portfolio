import React, { Component } from 'react';
import '../../App.css';

export class Footer extends Component {
  render() {
    return (
      <div id='footerDiv'>
        Made with{' '}
        <span role='img' aria-label='heart-emoji'>
          ❤️
        </span>{' '}
        by Adam
      </div>
    );
  }
}

export default Footer;
