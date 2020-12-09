import React, { Component } from 'react';
import {
  BrainstormNotes,
  demo,
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
          <div className='h2Highlight'>
            <h2>AR Measure</h2>
          </div>
          <h3>Product designer</h3>
          <h5>(Sep 2019 - May 2020)</h5>
          <h6>Tools: Illustrator, Figma, Wiarframe, Unity</h6>
        </div>
        {/* <ProjectPage title={modpod.title} date={modpod.date} /> */}
        <div className='projectDesc'>
          <p>
            A small team of designers and myself worked with GBC Research &
            Innovation to develop a proof of concept for an AR measuring app.
            This project took us from conception, to research, to design, to
            development, and finally to presenting our solutions to
            stakeholders.
          </p>
          <p>
            This projects spanned two semesters. In the first semester, we
            worked closely with the client's UX team to design an app that would
            allow users to measure their space, and then visualize products such
            as flooring through augmented reality. This phase was really all
            about information gathering -- who were the users, what were their
            needs, what functions are necessary in the app, and how to design it
            to be aesthetically pleasing were all questions raised in this
            phase. Through workshops and user research, we settled with three
            'guiding principles' that would inform how we proceeded with the
            app: it should be effortless, memorable, and experimental.
          </p>
          <p>
            The second phase focused on translating our design solutions to a
            functional prototype. We added a developer to the team and began
            building the experience in Unity.
          </p>
          <p>
            The second phase focused on translating our design solutions to a
            functional prototype. We added a developer to the team and began
            building the experience in Unity. Some challenges we faced included
            getting accurate measurements and overlaying materials. I worked
            mostly with the other designers on the UX and UI of the prototype,
            as well as communicating with the client.
          </p>
          <p>
            Towards the end, COVID-19 affected how much progress we could make,
            but the team managed to fulfill the design requirements and present
            a working prototype to the client stakeholders.
          </p>
        </div>
        <div className='projectImgs'>
          <div>
            <Image src={workshop1} alt='' />
          </div>
          <div>
            <Image src={workshop2} alt='' />
          </div>
          <div>
            <Image src={BrainstormNotes} alt='' />
          </div>
          <div>
            <Image src={triVis} alt='' />
          </div>
          <div>
            <Image src={journeyMap} alt='' />
          </div>
          <div>
            <Image src={flow1} alt='' />
          </div>
          <div>
            <Image src={userFlow} alt='' />
          </div>
          <div>
            <Image src={figmaPrototype} alt='' />
          </div>
          <div>
            <Image src={unityUI} alt='' />
          </div>
          <div>
            <Image src={tutorial1} alt='' />
          </div>
          <div>
            <Image src={tutorial2} alt='' />
          </div>
          <div>
            <Image src={tutorial3} alt='' />
          </div>
          <div>
            <Image src={demo} alt='' />
          </div>
        </div>
      </div>
    );
  }
}

export default Measure;
