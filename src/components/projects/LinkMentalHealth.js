import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  lmh_employersPage,
  lmh_persona,
  lmh_profileAppts,
  lmh_sketches,
  lmh_sketches2,
  lmh_sketches3,
  lmh_therapistProfile,
  lmh_userjourney,
  lmh_wireframes1,
  lmh_wireframes2,
  lmh_employersMobile,
  logo1,
  people_search,
  profileAppts,
  undraw_Savings_dwkw,
} from '../../images/';
import Image from '../../components/Image';
import '../../CSS/ProjectPage.css';

export class LinkMentalHealth extends Component {
  render() {
    return (
      <div className='pageDiv sectionContainer textBlock'>
        <div>
          <div className='h2Highlight'>
            <h2>LinkMentalHealth</h2>
          </div>
          <h3>Front-end developer; UX designer</h3>
          <h5>(Jan 2020 - Apr 2020)</h5>
          <h6>Tools: HTML, Bootstrap, JS, NodeJS, MongoDB</h6>
        </div>
        {/* <ProjectPage title={modpod.title} date={modpod.date} /> */}
        <div className='projectDesc'>
          <p>
            During my last year in the Interaction design program at GBC, I had
            the opportunity to work with a Toronto-based award-winning startup,
            LinkMentalHealth as a front-end developer and UX designer in a co-op
            placement. LinkMentalHealth is a platform that connects employers,
            employees, and students with personalized mental health services
            such as therapists. Its aim is to provide a more streamlined user
            experience when seeking help for mental health issues.
          </p>
          <p>
            I was responsible for working with the visual designer & the
            back-end developers to build a responsive website using HTML, CSS
            (built on the Bootstrap framework), and JavaScript. My tasks often
            involved communicating with the team to understand their
            requirements, and working together with the visual designer to code
            out their solutions. There was legacy code that I also took
            responsibility for cleaning up, and implemented a system-wide
            stylesheet and brand guideline that would make adding new elements a
            lot easier.
          </p>
          <p>
            While most of my work focused on coding the website, I also had a
            hand in improving the overall user experience. I worked with the
            team's visual designer to refine the user flow, create wireframes,
            and also conduct & analyze A/B interface tests.
          </p>
        </div>
        <div className='projectImgs'>
          <div className='projectImgAlign1'>
            <Image src={people_search} alt='' />
          </div>
          <div className='projectImgAlign6'>
            <Image src={undraw_Savings_dwkw} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={lmh_persona} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={lmh_userjourney} alt='' />
          </div>
          <div className='projectImgAlign1'>
            <Image src={lmh_sketches} alt='' />
          </div>
          <div className='projectImgAlign6' id='lmhImg6'>
            <Image src={lmh_wireframes2} alt='' />
          </div>
          <div className='projectImgAlign1'>
            <Image src={lmh_sketches2} alt='' />
          </div>
          <div className='projectImgAlign1'>
            <Image src={lmh_sketches3} alt='' />
          </div>
          <div className='projectImgAlign1' id='lmhImg9'>
            <Image src={lmh_employersMobile} alt='' />
          </div>
          <div className='projectImgAlign6'>
            <Image src={lmh_wireframes1} alt='' />
          </div>
          <div className='projectImgAlign6'>
            <Image src={lmh_therapistProfile} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={lmh_employersPage} alt='' />
          </div>
        </div>
        <div className='projectNavigation'>
          <Link
            to={{
              pathname: `/projects/anamorphic`,
              // projectProps: { title, img, desc },
            }}
          >
            <p>previous</p>
          </Link>
          <Link
            to={{
              pathname: `/projects/echo`,
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

export default LinkMentalHealth;
