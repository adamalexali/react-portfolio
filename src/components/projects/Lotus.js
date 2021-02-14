import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  gm_player,
  guided_meditation,
  guided_meditation3,
  guided_sleep,
  lotus_dashboard,
  lotus_splash,
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
  lotus_sleepPlayer,
  lotus_wireframes1,
  lotus_wireframes2,
  lotus_wireframes3,
  lotus_wireframes4,
  lotus_wireframes5,
  lotus_wireframes6,
  lotus_wireframes7,
  lotus_wireframes8,
  lotus_wireframes9,
  lotus_wireframes10,
  lotus_wireframes11,
  lotus_wireframes12,
  lotus_wireframes13,
  lotus_wireframes14,
  lotus_wireframes15,
  lotus_wireframes16,
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
          <div className='projectImgAlign3' id='lotusImg1'>
            <Image src={lotus_splash} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={lotus_sketches1} alt='' />
          </div>
          <div className='projectImgAlign7'>
            <Image src={lotus_wireframes1} alt='' />
          </div>
          <div className='projectImgAlign8'>
            <Image src={lotus_wireframes2} alt='' />
          </div>
          <div className='projectImgAlign9'>
            <Image src={lotus_wireframes3} alt='' />
          </div>
          <div className='projectImgAlign10'>
            <Image src={lotus_wireframes4} alt='' />
          </div>
          <div className='projectImgAlign7'>
            <Image src={lotus_wireframes5} alt='' />
          </div>
          <div className='projectImgAlign8'>
            <Image src={lotus_wireframes6} alt='' />
          </div>
          <div className='projectImgAlign9'>
            <Image src={lotus_wireframes7} alt='' />
          </div>
          <div className='projectImgAlign10'>
            <Image src={lotus_wireframes8} alt='' />
          </div>
          {/* <div className='projectImgAlign7 lotusLeavesImg'>
            <Image src={lotus_leaves1} alt='' />
          </div> */}
          <div className='projectImgAlign4'>
            <Image src={lotusDashboardGif} alt='' />
          </div>
          {/* <div className='projectImgAlign10 lotusLeavesImg'>
            <Image src={lotus_leaves3} alt='' />
          </div> */}
          <div className='projectImgAlign7'>
            <Image src={lotus_signup} alt='' />
          </div>
          <div className='projectImgAlign8'>
            <Image src={guided_meditation} alt='' />
          </div>
          <div className='projectImgAlign9'>
            <Image src={guided_meditation3} alt='' />
          </div>
          <div className='projectImgAlign10'>
            <Image src={gm_player} alt='' />
          </div>

          <div className='projectImgAlign8'>
            <Image src={lotus_sleep} alt='' />
          </div>
          <div className='projectImgAlign9'>
            <Image src={lotus_sleepPlayer} alt='' />
          </div>
        </div>
        <div className='projectNavigation'>
          <Link
            to={{
              pathname: `/projects/modpod`,
              // projectProps: { title, img, desc },
            }}
          >
            <p>previous</p>
          </Link>
          <Link
            to={{
              pathname: `/projects/anamorphic`,
              // projectProps: { title, img, desc },
            }}
          >
            <p>next</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Lotus;
