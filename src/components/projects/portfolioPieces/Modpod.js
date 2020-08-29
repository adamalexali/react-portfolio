import React, { useEffect } from 'react';
import Rellax from 'rellax';
import modpodBanner from '../../../../src/images/modpod/modpodBanner.png';

export default function Modpod() {
  useEffect(() => {
    new Rellax('.animate', {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax('.animate2', {
      speed: 2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax('.animate3', {
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
    <div className='container'>
      <div>
        <h1>Modpod</h1>
        <h2>Immersive environment</h2>
        <img src='' alt='' />
      </div>
    </div>
  );
}
