import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  bridgefy,
  echo_cityoftotalawareness,
  echo_code,
  echo_desktop1,
  echo_desktop2,
  echo_mobile1,
  echo_mobile2,
  echo_piratebox,
  echo_protest1,
  echo_protest2,
  echo_raspberrypi,
  echo_sketches,
  echo_persona1,
  pbx3,
  raspberryPiLogo,
  riotConcept,
  torontomesh,
} from '../../images/';
import Image from '../../components/Image';
import '../../CSS/ProjectPage.css';

export class Echo extends Component {
  render() {
    return (
      <div className='pageDiv sectionContainer textBlock'>
        <div>
          <div className='h2Highlight'>
            <h2>E.C.H.O</h2>
          </div>
          <h3>Front-end developer; UX designer</h3>
          <h5>(Jan 2020 - Apr 2020)</h5>
          <h6>Tools: Figma, Raspberry Pi, HTML, CSS, JS</h6>
        </div>
        {/* <ProjectPage title={modpod.title} date={modpod.date} /> */}
        <div className='projectDesc'>
          <p>
            For my first year in the Digital Experience Design program I bridged
            into a GBC, one of our classes was augmented reality. I wanted to
            create an immersive experience that combined many of the different
            areas of study I'm currently exploring; namely, 3D modeling, game
            development, and data visualization. Because of COVID-19, I, like
            most everyone, have been working from home. I knew this year was so
            impactful to people, so I wanted to tie that into the project.
          </p>
          <p>
            My fascination with AR comes from its abilities to greatly enchance
            the experiences of the real world. Because of the digital layer,
            there are opportunities to visualize much more interesting things,
            and allow for unique interactions between users and the world.
          </p>
          <p>
            One thing I really wanted to explore was the idea of perspective.
            Looking at a single object, it may not look like much. But seens
            from a different lens, a different frame of reference, it can become
            clear its interconnectedness with its environment and with the
            surrounding world. I wanted to explore this idea, and AR provided a
            unqiue and challenging opportunity to do just that.
          </p>
          <p>
            This projects aims to visualize the year 2020 through various
            artifacts. These artifacts can be models, images, Tweets, videos --
            anything digital -- that act as representations for people, things,
            and events that were viral throughout the year. The idea was to show
            how together they combine to make up the year 2020. Essentially,
            it's 'gestalt'.
          </p>
          <p>
            Beyond this, I thought it would be interesting to include real-world
            data and stats as well. This feature is currently being implemented.
            More to come very soon, check back!
          </p>
        </div>
        <div className='projectImgs'>
          <div>
            <Image src={echo_cityoftotalawareness} alt='' />
          </div>
          <div>
            <Image src={echo_protest1} alt='' />
          </div>
          <div>
            <Image src={echo_protest2} alt='' />
          </div>
          <div>
            <Image src={riotConcept} alt='' />
          </div>
          <div>
            <Image src={bridgefy} alt='' />
          </div>
          <div>
            <Image src={torontomesh} alt='' />
          </div>
          <div>
            <Image src={pbx3} alt='' />
          </div>
          <div>
            <Image src={raspberryPiLogo} alt='' />
          </div>
          <div>
            <Image src={echo_raspberrypi} alt='' />
          </div>
          <div>
            <Image src={echo_piratebox} alt='' />
          </div>
          <div>
            <Image src={echo_persona1} alt='' />
          </div>
          <div>
            <Image src={echo_mobile1} alt='' />
          </div>
          <div>
            <Image src={echo_mobile2} alt='' />
          </div>
          <div>
            <Image src={echo_desktop1} alt='' />
          </div>
          <div>
            <Image src={echo_desktop2} alt='' />
          </div>
        </div>
        <div className='projectNavigation'>
          <Link
            to={{
              pathname: `/projects/linkmentalhealth`,
              // projectProps: { title, img, desc },
            }}
          >
            <p>previous project</p>
          </Link>
          <Link
            to={{
              pathname: `/projects/measure`,
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

export default Echo;
