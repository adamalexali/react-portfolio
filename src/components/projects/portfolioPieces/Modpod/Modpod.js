import React, { useEffect } from 'react';
import Rellax from 'rellax';
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

export default function Modpod() {
  useEffect(() => {
    new Rellax('.animateSlow', {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax('.animateMed', {
      speed: 2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax('.animateFast', {
      speed: 20,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    // new Rellax(rellaxRef.current, {
    //   speed: -10,
    //   center: false,
    //   wrapper: null,
    //   round: true,
    //   vertical: true,
    //   horizontal: false,
    // });
  }, []);
  return (
    <div className='pageDiv'>
      <ProjectIntro
        title='Modpod'
        subtitle='Immersive environment'
        mainImg={modpodBanner}
      />
      <div className='section container'>
        <div className='sectionHeading'>
          <h2>Overview</h2>
          <h3>What does it mean to live autonomously </h3>
        </div>
        <div>
          <p>
            We were asked to design an immersive environment around the idea of
            living autonomously in a digital world. We came up with MODPOD, a
            modular home in which young professionals can customize their living
            space using various panels with different functions. The prototype
            was showcased at the GBC 2019 Year End Show using virtual reality.
          </p>
        </div>
      </div>
      <div className='section container'>
        <div>
          <h2>Research &amp; Ideation</h2>
        </div>
        <div className='imageDiv'>
          <div className='hs'>
            <img src={researchBerber} alt='' loading='lazy' />
            <img src={researchMongolian} alt='' loading='lazy' />
            <img src={researchSubarctic} alt='' loading='lazy' />
            <img src={researchYoruk} alt='' loading='lazy' />
          </div>
          <img src={modpodHundredQs} alt='' loading='lazy' />
          <img src={domeImg} alt='' loading='lazy' />
          <img src={yurtImg} alt='' loading='lazy' />
        </div>
      </div>
      <div className='section container'>
        <div>
          <h2>Design</h2>
        </div>
        <div className='imageDiv'>
          <img src={modpodSketches} alt='' loading='lazy' />
          <img src={modpodModel1} alt='' loading='lazy' />
          <img src={modpodModel2} alt='' loading='lazy' />
          <img src={modpodModel3} alt='' loading='lazy' />
          <img src={panels} alt='' loading='lazy' />
          <img src={modpodFlow} alt='' loading='lazy' />
        </div>
      </div>
      <div className='section container'>
        <div>
          <h2>Development</h2>
        </div>
        <div className='imageDiv'>
          <img src={modpod3DModel1} alt='' loading='lazy' />
          <div className='hs'>
            <img src={modpod3DModel3} alt='' loading='lazy' />
            <img src={modpod3DModel4} alt='' loading='lazy' />
            <img src={modpod3DModel5} alt='' loading='lazy' />
            <img src={modpod3DModel6} alt='' loading='lazy' />
          </div>
        </div>
      </div>
    </div>
  );
}
