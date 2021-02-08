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
            Spinning out from the work of the Institute Without Boundaries, the
            final year of the interaction design program focused on design
            related to the idea of a "city of experiences". We were expanding on
            concepts of a 'smart city' discussed in previous years to look at it
            broadly — what sorts of experiences define a city in the digital
            age, and how we can design for shifts in urban planning and digital
            infrastructure?
          </p>
          <p>
            This project spanned two semesters, the first of which focused on
            research, conceptualization, and general exploration of the theme of
            a city of experiences. In this phase, we looked at the real and
            imagined histories of cities, mapping events 100 years in the past
            and in the future in order to identify common themes and ideas
            across time and space. One thing we gravitated towards was the idea
            of conflict within cities. Riots have shaped cities by giving the
            masses a voice for social and political change.
          </p>
          <p>
            Communication among citizens played a huge role in the success or
            failure of riots and uprisings, and during this digital age, there
            are benefits of increased pathways for communication at the cost of
            personal privacy/anonymity. We aimed to answer the question: how
            might we create a space where users can express themselves freely?
            Some themes this question posed include freedom of speech and
            self-expression, anonymity, and access to information.
          </p>
          <p>
            E.C.H.O was our solution. E.C.H.O. stands for e-communications hub;
            offline. It is a social network apart from the internet, built using
            only a Raspberry Pi where users can chat and exchange information
            completely anonymously. The prototype interface was built off of
            PirateBox. You can find more of our development work with PirateBox
            & the Raspberry Pi{' '}
            <a href='https://github.com/JohnAydin/piratebox'>here</a>.
          </p>
          {/* <p>
            With regards to the recent insurrection at the U.S. Capitol, it is
            important to highlight the balancing act between privacy and
            security a service like E.C.H.O. must juggle. In my opinion, privacy
            with regards to communication should be preserved, however,
            platforms with a large audience must be held accountable for
            moderating those platforms.
          </p> */}
        </div>
        <div className='projectImgs'>
          <div className='projectImgAlign3'>
            <Image src={echo_cityoftotalawareness} alt='' />
            <div className='imgCaption'>
              <p>
                image retrieved from the{' '}
                <a href='https://institutewithoutboundaries.ca/design-issues-lecture-c-pandolfi-s-rabinyuk/'>
                  Institute Without Boundaries
                </a>
              </p>
            </div>
          </div>
          <div className='projectImgAlign1' id='echoImg2'>
            <Image src={echo_protest1} alt='' />
          </div>
          <div className='projectImgAlign6' id='echoImg3'>
            <Image src={echo_protest2} alt='' />
          </div>
          <div className='projectImgAlign1'>
            <Image src={riotConcept} alt='' />
          </div>
          <div className='projectImgAlign1' id='echoImg5'>
            <Image src={bridgefy} alt='' />
          </div>
          <div className='projectImgAlign6'>
            <Image src={torontomesh} alt='' />
          </div>
          <div className='projectImgAlign1' id='echoImg7'>
            <Image src={pbx3} alt='' />
          </div>
          <div className='projectImgAlign6'>
            <Image src={raspberryPiLogo} alt='' />
          </div>
          <div className='projectImgAlign6' id='echoImg9'>
            <Image src={echo_raspberrypi} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={echo_code} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={echo_piratebox} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={echo_persona1} alt='' />
          </div>
          <div className='projectImgAlign6'>
            <Image src={echo_sketches} alt='' />
          </div>
          <div className='projectImgAlign1' id='echoImg14'>
            <Image src={echo_mobile1} alt='' />
          </div>
          <div className='projectImgAlign6' id='echoImg15'>
            <Image src={echo_mobile2} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={echo_desktop1} alt='' />
          </div>
          <div className='projectImgAlign3'>
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
