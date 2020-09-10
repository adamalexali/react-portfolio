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
  modpod3DModel1,
  vrView1,
  vrView2,
  vrDemo,
  modpodTeam,
} from '../../../../images';
import '../../../layout/CSS/ProjectPage.css';
import '../Modpod/Modpod.css';
import ProjectIntro from '../../../layout/ProjectIntro';
import Image from '../../../layout/Image';

export default function Modpod() {
  const foregroundOffset = ['400px', '0px'];
  const midgroundOffset = ['50px', '0px'];
  const backgroundOffset = ['0px', '25px'];

  return (
    <div className='pageDiv'>
      <ProjectIntro
        title='Modpod'
        subtitle='Immersive environment'
        mainImg={modpodBanner}
      />
      <div className='container'>
        {/* <div id='headingDiv' className='section'>
          <p className='headingTag' id='headingTag1'>
            what does it mean{' '}
          </p>
          <p className='headingTag' id='headingTag2'>
            to live autonomously?
          </p>
        </div> */}
        <div className='sectionBody'>
          <p className='bodyText'>
            We were asked to design an immersive environment around the idea of
            living autonomously in a digital world.
          </p>
          <p className='bodyText'>
            We came up with <strong className='gradientText'>MODPOD</strong> - a
            modular home in which young professionals can customize their living
            space using various panels with different functions.
          </p>
          <p className='bodyText'>
            The prototype was showcased at the GBC 2019 Year End Show using
            virtual reality.
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='foregroundEl' id='sectionTitle'>
          <Parallax className='parallaxText' y={foregroundOffset}>
            <h2>
              research &amp; <br /> ideation
            </h2>
          </Parallax>
        </div>
        <div className='section'>
          <div id='researchBerberImg' className='backgroundEl'>
            <Parallax y={backgroundOffset}>
              <Image src={researchBerber} alt='' />
            </Parallax>
          </div>
          <div id='researchMongolianImg' className='midgroundEl'>
            <Parallax y={midgroundOffset}>
              <Image src={researchMongolian} alt='' />
            </Parallax>
          </div>
          <div id='researchSubarcticImg' className='backgroundEl'>
            <Parallax y={backgroundOffset}>
              <Image src={researchSubarctic} alt='' />
            </Parallax>
          </div>
          <div id='researchYorukImg' className='midgroundEl'>
            <Parallax y={midgroundOffset}>
              <Image src={researchYoruk} alt='' />
            </Parallax>
          </div>
        </div>
        <div className='section'>
          <div id='hundredQs' className='backgroundEl'>
            <Parallax y={backgroundOffset}>
              <Image src={modpodHundredQs} alt='' />
            </Parallax>
          </div>
        </div>
        <div className='section'>
          <div id='geodesicDome' className='midgroundEl'>
            <Parallax y={midgroundOffset}>
              <Image src={domeImg} alt='' />
            </Parallax>
          </div>
          <div id='yurtImg' className='backgroundEl'>
            <Parallax y={backgroundOffset}>
              <Image src={yurtImg} alt='' />
            </Parallax>
          </div>
        </div>
      </div>
      <div id='designSection' className='container'>
        <div className='foregroundEl' id='sectionTitle'>
          <Parallax y={foregroundOffset}>
            <h2>
              design &amp; <br /> development
            </h2>
          </Parallax>
        </div>
        <div className='section'>
          <div id='sketchesImg' className='backgroundEl'>
            {/* <Parallax y={backgroundOffset}> */}
            <Image src={modpodSketches} alt='' />
            {/* </Parallax> */}
          </div>
        </div>
        <div className='section'>
          <div id='modpodModel1' className='midgroundEl'>
            <Parallax y={midgroundOffset}>
              <Image src={modpodModel1} alt='' />
            </Parallax>
          </div>
          <div id='modpodModel3' className='backgroundEl'>
            <Parallax y={backgroundOffset}>
              <Image src={modpodModel3} alt='' />
            </Parallax>
          </div>
          <div id='modpodModel2' className='midgroundEl'>
            <Parallax y={midgroundOffset}>
              <Image src={modpodModel2} alt='' />
            </Parallax>
          </div>
        </div>
        <div className='section'>
          <div id='modpod3DModel1' className='backgroundEl'>
            <Parallax y={backgroundOffset}>
              <Image src={modpod3DModel1} alt='' />
            </Parallax>
          </div>
          <div id='vrView1' className='midgroundEl'>
            <Parallax y={midgroundOffset}>
              <Image src={vrView1} alt='' />
            </Parallax>
          </div>
          <div id='vrDemo' className='backgroundEl'>
            <Parallax y={backgroundOffset}>
              <Image src={vrDemo} alt='' />
            </Parallax>
          </div>
          <div id='vrView2' className='midgroundEl'>
            <Parallax y={midgroundOffset}>
              <Image src={vrView2} alt='' />
            </Parallax>
          </div>
        </div>
      </div>
      <div className='container'>
        <div id='modpodVideo'>
          <iframe
            title='Modpod VR Demo Video'
            src='https://www.youtube.com/embed/2Xj3mUAu9lQ'
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className='container'>
        <div className='sectionBody'>
          <p className='bodyText'>
            This project was our first real experience working with Unreal
            Engine and virtual reality, and in many ways it was a crash course.
          </p>
          <p className='bodyText'>
            The final product was a bit glitchy and the user experience could
            have been fleshed out more. Most people who participated were more
            interested in the mechanics of grabbing panels than building a
            modular home.
          </p>
          <p className='bodyText'>
            Regardless, I was grateful to get my feet wet with building virtual
            reality apps, as I believe possessing skills such as this makes you
            invaluable as a experience designer.
          </p>
        </div>
        <div className='section'>
          <div id='modpodTeam' className='midgroundEl'>
            <Parallax y={midgroundOffset}>
              <Image src={modpodTeam} alt='' />
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  );
}
