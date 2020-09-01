import React from 'react';
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
        <div className='foregroundEl' id='sectionTitle'>
          <Parallax className='parallaxText' y={['400px', '0px']}>
            <h2>Research &amp; Ideation</h2>
          </Parallax>
        </div>
        <div className='div1'>
          <div className='backgroundEl'>
            <Parallax y={['0px', '25px']}>
              <Image src={researchBerber} alt='' />
            </Parallax>
          </div>
          <div className='midgroundEl'>
            <Parallax y={['50px', '0px']}>
              <Image src={researchMongolian} alt='' />
            </Parallax>
          </div>
          <div className='backgroundEl'>
            <Parallax y={['0px', '25px']}>
              <Image src={researchSubarctic} alt='' />
            </Parallax>
          </div>
          <div className='midgroundEl'>
            <Parallax y={['50px', '0px']}>
              <Image src={researchYoruk} alt='' />
            </Parallax>
          </div>
        </div>
        <div className='div1'>
          <div id='hundredQs' className='backgroundEl'>
            <Parallax y={['0px', '25px']}>
              <Image src={modpodHundredQs} alt='' />
            </Parallax>
          </div>
        </div>
        <div>
          <Image src={domeImg} alt='' />
          <Image src={yurtImg} alt='' />
        </div>
      </div>
      <div id='designSection' className='section container'>
        <div id='sectionTitle'>
          <Parallax y={['400px', '0px']}>
            <h2>Design &amp; development</h2>
          </Parallax>
        </div>
        <div className='imageDiv'>
          <Image src={modpodSketches} alt='' />
          <div>
            <Image src={modpodModel1} alt='' />
            <Image src={modpodModel2} alt='' />
            <Image src={modpodModel3} alt='' />
          </div>
          <Image src={panels} alt='' />
          <Image src={modpodFlow} alt='' />
        </div>
        <div className='imageDiv'>
          <Image src={modpod3DModel1} alt='' />
          <div className='hs'>
            <Image src={modpod3DModel3} alt='' />
            <Image src={modpod3DModel4} alt='' />
            <Image src={modpod3DModel5} alt='' />
            <Image src={modpod3DModel6} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
