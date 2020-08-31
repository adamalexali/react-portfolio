import React, { useEffect } from 'react';
import Rellax from 'rellax';
import modpodBanner from '../../../../../src/images/modpod/modpodBanner.png';
import researchBerber from '../../../../../src/images/modpod/research-berber.png';
import researchMongolian from '../../../../../src/images/modpod/research-mongolian.png';
import researchSubarctic from '../../../../../src/images/modpod/research-subarctic.png';
import researchYoruk from '../../../../../src/images/modpod/research-yoruk.png';
import hundredQs from '../../../../../src/images/modpod/100-questions.png';
import domeImg from '../../../../../src/images/modpod/geodesicdome.jpg';
import yurtImg from '../../../../../src/images/modpod/yurt.jpg';
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
          <img src={researchBerber} alt='' loading='lazy' />
          <img src={researchMongolian} alt='' loading='lazy' />
          <img src={researchSubarctic} alt='' loading='lazy' />
          <img src={researchYoruk} alt='' loading='lazy' />
          <img src={hundredQs} alt='' loading='lazy' />
          <img src={domeImg} alt='' loading='lazy' />
          <img src={yurtImg} alt='' loading='lazy' />
        </div>
      </div>
      <div className='section container'>
        <div>
          <h2>Design</h2>
        </div>
        <div className='imageDiv'></div>
      </div>
      <div className='section container'>
        <div>
          <h2>Development</h2>
        </div>
        <div className='imageDiv'></div>
      </div>
    </div>
  );
}
