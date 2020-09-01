import React, { useEffect } from 'react';
import {
  modpodBanner,
  researchBerber,
  researchMongolian,
  researchSubarctic,
  researchYoruk,
  hundredQs,
  domeImg,
  yurtImg,
} from '../../../../images';
import ProjectIntro from '../../../layout/ProjectIntro';

export default function Echo() {
  return (
    <div className='pageDiv'>
      <ProjectIntro
        title='ECHO'
        subtitle='Offline communication network'
        mainImg={modpodBanner}
      />
      <div className='overview container'>
        <div className='sectionHeading'>
          <h2>Overview</h2>
          <h3>What does it mean to live autonomously </h3>
        </div>
        <p>
          We were asked to design an immersive environment around the idea of
          living autonomously in a digital world. We came up with MODPOD, a
          modular home in which young professionals can customize their living
          space using various panels with different functions. The prototype was
          showcased at the GBC 2019 Year End Show using virtual reality.
        </p>
      </div>
    </div>
  );
}
