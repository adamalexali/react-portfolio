import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  BrainstormNotes,
  figmaPrototype,
  flow1,
  journeyMap,
  triVis,
  tutorial1,
  tutorial2,
  tutorial3,
  unityUI,
  userFlow,
  workshop1,
  workshop2,
} from '../../images/';
import Image from '../../components/Image';
import '../../CSS/ProjectPage.css';

export class Measure extends Component {
  render() {
    return (
      <div className='pageDiv sectionContainer textBlock'>
        <div>
          <div className='highlight'>
            <h1>AR Measure</h1>
          </div>
          <h2>Product designer</h2>
          <h5>(Sep 2019 - May 2020)</h5>
          <h6>Tools: Illustrator, Figma, Wiarframe, Unity</h6>
        </div>
        {/* <ProjectPage title={modpod.title} date={modpod.date} /> */}
        <div className='projectDesc'>
          <p>
            A small team of designers and myself worked with GBC Research &
            Innovation to develop a proof of concept for an AR measuring app.
            This project took us from conception, research, design, development,
            and finally to presenting our solutions to stakeholders.
          </p>
          <p>
            This project spanned two semesters. In the first semester, we worked
            closely with the client's UX team to design an app that would allow
            users to measure their space, and then visualize products such as
            flooring through augmented reality. This phase was really all about
            information gathering: who were the users, what were their needs,
            what functions are necessary for the app, and how to design it to be
            aesthetically pleasing? Through workshops and user research, we
            settled with three 'guiding principles' that would inform how we
            proceeded with the app: it should be effortless, memorable, and
            experimental.
          </p>
          <p>
            The second phase focused on translating our design solutions to a
            functional prototype. We added a developer to the team and began
            building the experience in Unity. Some challenges we faced included
            getting accurate measurements and overlaying materials.
          </p>
          <p>
            My role in this project was primarily research focused. I conducted
            user research and competitive analyses to understand the context in
            which this app might exist. I then communicated this research with
            the design team to translate my findings into tangible user
            experience. My role also consisted of communicating with the client;
            presenting progress and solutions, and facilitating workshops with
            them to co-design the app. In the second phase of this project, I
            also assisted in building the prototype using Unity Engine.
          </p>
          <p>
            Towards the end, COVID-19 affected how much progress we could make,
            but the team managed to fulfill the design requirements and present
            a working prototype to the client stakeholders.
          </p>
        </div>
        <div className='projectImgs'>
          <div className='projectImgAlign1' id='measureImg1'>
            <Image src={workshop1} alt='' />
          </div>
          <div className='projectImgAlign6' id='measureImg2'>
            <Image src={workshop2} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={BrainstormNotes} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={triVis} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={journeyMap} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={flow1} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={userFlow} alt='' />
          </div>
          <div className='projectImgAlign1'>
            <Image src={figmaPrototype} alt='' />
          </div>
          <div className='projectImgAlign6'>
            <Image src={unityUI} alt='' />
          </div>
          <div className='projectImgAlign1' id='measureImg10'>
            <Image src={tutorial1} alt='' />
          </div>
          <div className='projectImgAlign6' id='measureImg11'>
            <Image src={tutorial2} alt='' />
          </div>
          <div className='projectImgAlign1' id='measureImg12'>
            <Image src={tutorial3} alt='' />
          </div>
          <div className='projectImgAlign3'>
            {/* <Image src={demo} alt='' /> */}
            <iframe
              title='AR Measure Demo'
              width='100%'
              height='auto'
              src='https://www.youtube.com/embed/XuvMfPW_vQ0'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className='projectNavigation'>
          <Link
            to={{
              pathname: `/projects/echo`,
              // projectProps: { title, img, desc },
            }}
          >
            <p>previous</p>
          </Link>
          <Link
            to={{
              pathname: `/projects/modpod`,
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

export default Measure;
