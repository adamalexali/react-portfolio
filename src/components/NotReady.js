import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotReady extends Component {
  render() {
    return (
      <div id='notReadyRoute' className='sectionContainer'>
        <h3>
          Sorry!{' '}
          <span role='img' aria-label='stars'>
            💫
          </span>
        </h3>
        <p>
          This section is still being built. I'm always updating my portfolio;
          check back later!
        </p>
        <div>
          <Link to='/'>home &rarr;</Link>
        </div>
      </div>
    );
  }
}

export default NotReady;
