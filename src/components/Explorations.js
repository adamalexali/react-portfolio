import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ExplorationsCard from './ExplorationsCard';
import placeholder from '../../images/projectCards/placeholder.png';

class Explorations extends Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  render() {
    return (
      <div>
        <div id='projectsPageSection' className='sectionContainer'>
          <div id='projectsPageHeadline'>
            <div className='h2Highlight'>
              <h2>Explorations</h2>
            </div>
            <div>
              <p>
                Here you'll find things I'm exploring; topics that interest me
                and that which I am currently honing my skills in. Under each
                card you'll find a variety of bite-sized content. Take a look at
                some of the stuff I'm working on!
              </p>
            </div>
          </div>
          <div>
            <ExplorationsCard title='interaction' img={placeholder} />
          </div>
          <div>
            <ExplorationsCard title='development' img={placeholder} />
          </div>
          <div>
            <ExplorationsCard title='3d' img={placeholder} />
          </div>
          <div>
            <ExplorationsCard title='motion graphics' img={placeholder} />
          </div>
          <div>
            <ExplorationsCard title='extended reality' img={placeholder} />
          </div>
          <div>
            <ExplorationsCard title='data &amp; iot' img={placeholder} />
          </div>
        </div>
      </div>
    );
  }
}

export default Explorations;
