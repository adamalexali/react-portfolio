import React, { useEffect } from 'react';
import Rellax from 'rellax';
import modpodBanner from '../../../../../src/images/modpod/modpodBanner.png';
import './Modpod.css';

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
      <div className='intro container'>
        <h1>Modpod</h1>
        <img
          src={modpodBanner}
          alt='Modpod Banner'
          id='modpodBanner'
          className='animateSlow'
        ></img>
        <h1>Immersive environment</h1>
      </div>
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
