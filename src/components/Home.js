import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timeline from './Timeline';
import '../CSS/Home.css';

class Home extends Component {
  render() {
    return (
      <div className='_container'>
        <div>
          <h1>Hello World</h1>
          <p>
            I'm Adam. I'm a Toronto-based digital experience designer &amp;
            prototyper <span>&rarr;</span> I design and develop digital
            products, systems, and services!
          </p>
          <p>
            This is my digital space; where I showcase my previous projects, the
            things I’m working on, and things that interest me.
          </p>
          <p>
            I’m passionate and curious about digital design and how it can be
            used to empower people for good. I am particularly interested in
            open source, the virtual sphere, tech, smart cities, and digital
            futures.
          </p>
          <p>
            Below you’ll find a collection of projects I’ve worked on. If you
            want to learn more about me, you can <a href='/about'>click here</a>
            .
          </p>
        </div>
        <div>
          <h1>Development</h1>
          <div className='divList'>
            <Link
              to={{
                pathname: `/projects/linkmentalhealth`,
              }}
            >
              <div>
                <h4>
                  LinkMentalHealth{' '}
                  <span className='yearRange'>
                    (co-op; JAN 2020 - APR 2020)
                  </span>
                </h4>
                <p>
                  A platform aimed at connected employers, workers, and students
                  with personalized mental health services{' '}
                  <span className='accent'>&rarr;</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <h1>Design</h1>
          <div className='divList'>
            <Link
              to={{
                pathname: `/projects/anamorphic`,
              }}
            >
              <div>
                <h4>
                  Anamorphic AR{' '}
                  <span className='yearRange'>
                    (student; SEP 2020 - JAN 2021)
                  </span>
                </h4>
                <p>
                  An augmented reality art piece looking back on the year from a
                  different perspective. <span className='accent'>&rarr;</span>
                </p>
              </div>
            </Link>
            <Link
              to={{
                pathname: `/projects/echo`,
              }}
            >
              <div>
                <h4>
                  E.C.H.O{' '}
                  <span className='yearRange'>
                    (student; SEP 2019 - APR 2020)
                  </span>
                </h4>
                <p>
                  A offline, decentralized communications and file-sharing
                  network for the imagined dystopian cyberpunk future.{' '}
                  <span className='accent'>&rarr;</span>
                </p>
              </div>
            </Link>
            <Link
              to={{
                pathname: `/projects/measure`,
              }}
            >
              <div>
                <h4>
                  AR Measure App{' '}
                  <span className='yearRange'>
                    (contract; SEP 2019 - MAY 2020)
                  </span>
                </h4>
                <p>
                  Exploring a proof-of-concept of the future of e-commerce and
                  augmented reality integration for interior design.{' '}
                  <span className='accent'>&rarr;</span>
                </p>
              </div>
            </Link>
            <Link
              to={{
                pathname: `/projects/modpod`,
              }}
            >
              <div>
                <h4>
                  ModPod{' '}
                  <span className='yearRange'>
                    (student; SEP 2018 - APR 2019)
                  </span>
                </h4>
                <p>
                  Looking at solutions for "what it means to live autonomously
                  in the digital age" through a virtual reality demo.{' '}
                  <span className='accent'>&rarr;</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
