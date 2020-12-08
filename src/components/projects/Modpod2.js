import React, { Component } from 'react';
import ProjectPage from '../ProjectPage';

// const modpod = {
//   title: 'Modpod',
//   date: 'Sep 2018 - Apr 2019',
// };

export class Modpod extends Component {
  render() {
    return (
      <div className='pageDiv sectionContainer textBlock'>
        {/* <ProjectPage title={modpod.title} date={modpod.date} /> */}
        <div id='projectIntro'>
          <div className='h2Highlight'>
            <h2>Modpod</h2>
          </div>
          <h3>Sep 2018 - Apr 2019</h3>
        </div>
        <div id='projectDetails'></div>
        <div>
          <p>
            MODPOD. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, illum eum autem corrupti dolorem at provident qui atque
            officiis quasi quas nesciunt molestias? Quia provident odio placeat
            doloremque deleniti vel.
          </p>
          <p>
            MODPOD. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, illum eum autem corrupti dolorem at provident qui atque
            officiis quasi quas nesciunt molestias? Quia provident odio placeat
            doloremque deleniti vel.
          </p>
          <p>
            MODPOD. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, illum eum autem corrupti dolorem at provident qui atque
            officiis quasi quas nesciunt molestias? Quia provident odio placeat
            doloremque deleniti vel.
          </p>
        </div>
      </div>
    );
  }
}

export default Modpod;
