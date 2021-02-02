import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  gm_player,
  guided_meditation,
  guided_meditation3,
  guided_sleep,
  lotus_dashboard,
  lotusDashboardGif,
  lotus_signup,
  lotus_leaves1,
  lotus_leaves2,
  lotus_leaves3,
  lotus_logo,
  lotus_loading,
  lotus_sketches1,
  lotus_sketches2,
  lotus_sleep,
  lotus_wireframes,
  lotus_soundPlayer,
  lotusDashboardWireframe,
} from '../../images/';
import Image from '../../components/Image';
import '../../CSS/ProjectPage.css';

export class Lotus extends Component {
  render() {
    return (
      <div className='pageDiv sectionContainer textBlock'>
        <div>
          <div className='h2Highlight'>
            <h2>Lotus</h2>
          </div>
          <h3>Visual designer; interface designer</h3>
          <h5>(Sep 2018 - Jan 2019)</h5>
          <h6>Tools: Figma, Illustrator</h6>
        </div>
        {/* <ProjectPage title={modpod.title} date={modpod.date} /> */}
        <div className='projectDesc'>
          <p>
            Lotus was one of the first projects I created during my time in the
            Interaction Design program at George Brown. This project was for
            learning visual design for interfaces.
          </p>
          <p>
            Lotus is essentially a meditation app, where users can create a
            profile and use the app's guided meditation modules to practice
            mindfulness. Users can also monitor biometrics such as heart rate,
            stress, & quality of sleep, as well as keep track of their
            mindfulness practice with a journal feature within the app.
          </p>
          <p>
            This project focused mostly on the visual, aesthetic aspects of user
            interfaces — allowing me to sharpen my skills in design fundamentals
            such as color theory, typography, visual hierarchy, consistency, as
            well as more narrow skills such as communication through design and
            usability of interfaces.
          </p>
        </div>
        <div className='projectImgs'>
          <div>
            <Image src={lotus_loading} alt='' />
          </div>
          <div>
            <Image src={lotus_sketches1} alt='' />
          </div>
          <div>
            <Image src={lotus_wireframes} alt='' />
          </div>
          <div>
            <Image src={lotus_signup} alt='' />
          </div>
          <div>
            <Image src={lotusDashboardGif} alt='' />
          </div>
          <div>
            <Image src={guided_meditation} alt='' />
          </div>
          <div>
            <Image src={guided_meditation3} alt='' />
          </div>
          <div>
            <Image src={gm_player} alt='' />
          </div>
        </div>
        <div className='projectNavigation'>
          <Link
            to={{
              pathname: `/projects/modpod`,
              // projectProps: { title, img, desc },
            }}
          >
            <p>previous project</p>
          </Link>
          <Link
            to={{
              pathname: `/projects/anamorphic`,
              // projectProps: { title, img, desc },
            }}
          >
            <p>next project</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Lotus;
