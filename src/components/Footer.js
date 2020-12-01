import React, { Component } from 'react';
import '../../App.css';

export class Footer extends Component {
  render() {
    return (
      <div id='footerDiv'>
        <p>
          made with&nbsp;
          <span role='img' aria-label='heart'>
            ❤️
          </span>
          &nbsp;by Adam
        </p>
      </div>
    );
  }
}

export default Footer;
