import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './Home.css';

import ProjectCard from './ProjectCard';
import ScrollAnimation from 'react-animate-on-scroll';

import modpodImg from './images/projectCards/modpodImg.png';
import bladeImg from './images/projectCards/bladeImg.png';

const Home = () => {
  return (
    <div className='appContainer'>
      <div className='introduction section'>
        <h4 className='serif'>Hey! My name is</h4>
        <h1 className='bold'>Adam Ali</h1>
        <h3 className='important serif subtitle'>Designer & developer</h3>
      </div>
      <div className='project section'>
        <div>
          <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
            <ProjectCard title='Projects' img={modpodImg} alt='Projects' />
          </ScrollAnimation>
        </div>
      </div>
      <footer>
        <div class='section contact'>
          <ScrollAnimation delay='500' animateIn='fadeInUp' animateOnce='true'>
            <h4>@adamalexali</h4>
            <div>
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
          </ScrollAnimation>
        </div>
      </footer>
    </div>
  );
};

export default Home;
