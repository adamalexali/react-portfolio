import React, { useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import {
  modpodBanner,
  researchBerber,
  researchMongolian,
  researchSubarctic,
  researchYoruk,
  modpodHundredQs,
  domeImg,
  yurtImg,
  modpodSketches,
  modpodModel1,
  modpodModel2,
  modpodModel3,
  panels,
  modpodFlow,
  modpod3DModel1,
  modpod3DModel3,
  modpod3DModel4,
  modpod3DModel5,
  modpod3DModel6,
} from '../../../../images';
import '../../../layout/CSS/ProjectPage.css';
import ProjectIntro from '../../../layout/ProjectIntro';
import Image from '../../../layout/Image';

export default function Modpod() {
  return (
    <div className='pageDiv'>
      <ProjectIntro
        title='Modpod'
        subtitle='Immersive environment'
        mainImg={modpodBanner}
      />
      <div className='section container'>
        <div className='sectionHeading'>
          {/* <h2 className='animateFast'>Overview</h2> */}
          <h3 id='headingTag1'>What does it mean </h3>
          <h3 id='headingTag2'>to live autonomously?</h3>
        </div>
        <div className='sectionBody'>
          <p className='overviewMainText'>
            We were asked to design an immersive environment around the idea of
            living autonomously in a digital world. We came up with MODPOD, a
            modular home in which young professionals can customize their living
            space using various panels with different functions. The prototype
            was showcased at the GBC 2019 Year End Show using virtual reality.
          </p>
        </div>
      </div>
      <div className='section container'>
        <div id='sectionTitle'>
          <Parallax y={['200px', '0px']}>
            <h2>Research &amp; Ideation</h2>
          </Parallax>
        </div>
        <div className='hs'>
          <Image src={researchBerber} />
          <Image src={researchMongolian} alt='' loading='lazy' />
          <Image src={researchSubarctic} alt='' loading='lazy' />
          <Image src={researchYoruk} alt='' loading='lazy' />
        </div>
        <Image src={modpodHundredQs} alt='' loading='lazy' />
        <div>
          <Image src={domeImg} alt='' loading='lazy' />
          <Image src={yurtImg} alt='' loading='lazy' />
        </div>
      </div>
      <div id='designSection' className='section container'>
        <div className='imageDiv'>
          <Image src={modpodSketches} alt='' loading='lazy' />
          <div>
            <Image src={modpodModel1} alt='' loading='lazy' />
            <Image src={modpodModel2} alt='' loading='lazy' />
            <Image src={modpodModel3} alt='' loading='lazy' />
          </div>
          <Image src={panels} alt='' loading='lazy' />
          <Image src={modpodFlow} alt='' loading='lazy' />
        </div>
      </div>
      <div className='section container'>
        <div id='sectionTitle'>
          <Parallax y={['200px', '0px']}>
            <h2>Design &amp; development</h2>
          </Parallax>
        </div>
        <div className='imageDiv'>
          <Image src={modpod3DModel1} alt='' loading='lazy' />
          <div className='hs'>
            <Image src={modpod3DModel3} alt='' loading='lazy' />
            <Image src={modpod3DModel4} alt='' loading='lazy' />
            <Image src={modpod3DModel5} alt='' loading='lazy' />
            <Image src={modpod3DModel6} alt='' loading='lazy' />
          </div>
        </div>
      </div>
    </div>
  );
}
