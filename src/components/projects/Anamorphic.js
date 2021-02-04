import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  AReye,
  ARartifacts,
  eye1,
  eye2,
  ARfigma,
  coronavirus,
  guitar,
  hornet,
  riggingGIF,
  taskFlow,
  unity1,
  unityDemo,
  unityPrototype,
} from '../../images/';
import Image from '../../components/Image';
import '../../CSS/ProjectPage.css';

export class Anamorphic extends Component {
  render() {
    return (
      <div className='pageDiv sectionContainer textBlock'>
        <div>
          <div className='h2Highlight'>
            <h2>Anamorphic AR</h2>
          </div>
          <h3>Experience designer</h3>
          <h5>(Sep 2020 - current)</h5>
          <h6>Tools: Figma, Lens Studio, Cinema 4D, Unity</h6>
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
          <div className='projectImgAlign1'>
            <Image src={ARfigma} alt='' />
          </div>
          <div className='projectImgAlign6'>
            <Image src={taskFlow} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={eye1} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={eye2} alt='' />
          </div>
          <div className='projectImgAlign4'>
            <Image src={AReye} alt='' />
          </div>
          <div className='projectImgAlign1'>
            <Image src={unity1} alt='' />
          </div>
          <div className='projectImgAlign6'>
            <Image src={unityPrototype} alt='' />
          </div>
          <div className='projectImgAlign4'>
            <Image src={coronavirus} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={hornet} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={guitar} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={riggingGIF} alt='' />
          </div>
          <div className='projectImgAlign5'>
            <Image src={ARartifacts} alt='' />
          </div>
          <div className='projectImgAlign2'>
            <Image src={unityDemo} alt='' />
          </div>
        </div>
        <div className='projectNavigation'>
          <Link
            to={{
              pathname: `/projects/lotus`,
              // projectProps: { title, img, desc },
            }}
          >
            <p>previous project</p>
          </Link>
          <Link
            to={{
              pathname: `/projects/linkmentalhealth`,
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

export default Anamorphic;
