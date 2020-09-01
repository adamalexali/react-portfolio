import React, { useEffect } from 'react';

export default function Home() {
  return (
    <div className='container'>
      <div className='animateFast smallText'>I’m super fast!!</div>
      <div className='animateMed mediumText'>I’m slow and smooth</div>
      <div className='animateSlow bigText'>I’m extra slow and smooth</div>
    </div>
  );
}
