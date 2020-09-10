import React, { Component } from 'react';
import '../../App.css';

export class Footer extends Component {
  render() {
    return (
      <div id='footerDiv'>
        <p>
          made with{' '}
          <span role='img' aria-label='heart-emoji'>
            ❤
          </span>{' '}
          by Adam
        </p>
      </div>
    );
  }
}

export default Footer;
