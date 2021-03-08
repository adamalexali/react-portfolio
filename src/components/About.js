import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pfp from '../images/branding/pfp-optimized.png';
import '../CSS/About.css';

export class About extends Component {
  render() {
    return (
      <div className='_container'>
        <div>
          <img id='pfp' src={pfp} alt='' />
        </div>
        <div>
          <h1>Education</h1>
          <div className='divList'>
            <div>
              <h4>
                Honours Bachelor of Digital Experience Design{' '}
                <span className='yearRange'>(2020 - 2022)</span>{' '}
              </h4>
              <p>George Brown College</p>
            </div>
            <div>
              <h4>
                Advanced Diploma in Interaction Design &amp; Developmen{' '}
                <span className='yearRange'>(2017 - 2020)</span>{' '}
              </h4>
              <p>George Brown College</p>
            </div>
          </div>
        </div>
        <div>
          <h1>Work</h1>
          <div className='divList'>
            <div>
              <h4>
                Graphic Designer{' '}
                <span className='yearRange'>
                  (contract; DEC 2020 - FEB 2021)
                </span>{' '}
              </h4>
              <p>Ontario Black History Society</p>
            </div>
            <div>
              <h4>
                UX Designer{' '}
                <span className='yearRange'>
                  (contract; SEP 2019 - MAY 2020)
                </span>{' '}
              </h4>
              <p>GBC Research &amp; Innovation</p>
            </div>
            <div>
              <h4>
                Front-End Developer{' '}
                <span className='yearRange'>(co-op; JAN 2020 - APR 2020)</span>{' '}
              </h4>
              <p>LinkMentalHealth</p>
            </div>
            <div>
              <h4>
                Front-End Developer{' '}
                <span className='yearRange'>(co-op; SEP 2019 - NOV 2019)</span>{' '}
              </h4>
              <p>Blade Creative Branding, Inc.</p>
            </div>
            <div>
              <h4>
                UX Designer{' '}
                <span className='yearRange'>
                  (student; SEP 2018 - APR 2019)
                </span>{' '}
              </h4>
              <p>GBC School of Design</p>
            </div>
          </div>
        </div>
        <div>
          <h1>Bio</h1>
          <div>
            <p>
              Since I was young, I’ve loved technology and design. I grew up in
              the early days of the internet, and it had a huge influence on me.
              I'm old enough to remember a time before our lives were dominanted
              by the massive platforms of today... where the internet was an
              exciting and uncharted field of discovery and information.
            </p>
            <p>
              I want to be part of the community that examines and designs what
              the future of digital connectivity is.
            </p>
            <p>
              When I’m not working or in school, I like to spend my time playing
              video games, watching anime, reading, writing, running, or lifting
              weights.
            </p>
            <p>
              I’m currently living and working in the GTA, looking forward to
              life after the pandemic :)
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
