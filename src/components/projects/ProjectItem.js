import React, { useRef, useEffect } from 'react';
import './ProjectItem.css';
import Rellax from 'rellax';

export default function ProjectItem() {
  // So Rellax works... but I'm not sure why. I found this solution on stack overflow, and the poster said it is achieved using Hooks, which I don't know much about
  // looks like useRef isn't used at all, I'll try removing it and seeing if theres much effect.
  // Also just not really sure what refs are. useEffect() seems to be how it works.
  // const rellaxRef = useRef();

  // so I guess, creating a new Rellax animation, set a class name and parameters. Speed is the one probably most used. Z-index I guess set in css file.
  // So what I can do is set ~3 Rellax animations, maybe for foreground, midground, and background. Set the speeds and z-index. Shouldn't be too crazy.
  // And then its just as easy as setting the class name. Hopefully.
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
      <div className='animate2 mediumText'>I’m slow and smooth</div>

      <div className='animate3 smallText'>I’m super fast!!</div>

      <div className='animate bigText'>I’m extra slow and smooth</div>
    </div>
  );
}
