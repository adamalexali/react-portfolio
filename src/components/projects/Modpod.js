import React, { Component } from 'react';
// import ProjectPage from '../ProjectPage';
import { Link } from 'react-router-dom';
import {
  researchBerber,
  researchMongolian,
  researchSubarctic,
  researchYoruk,
  modpodHundredQs,
  modpodSketches,
  modpodModel1,
  modpodModel2,
  modpodModel3,
  modpod3DModel1,
  // vrView1,
  vrView2,
  vrDemo,
  // modpodTeam,
  millenials,
  // panelsVR,
  panelsVariety,
  // modpodUI,
  modpod_yurt,
  modpod_geodesic,
} from '../../images';
import Image from '../Image';
import '../../CSS/ProjectPage.css';

// const modpod = {
//   title: 'Modpod',
//   date: 'Sep 2018 - Apr 2019',
// };

export class Modpod extends Component {
  render() {
    return (
      <div className='_container-lg pageDiv'>
        <div>
          <div className='projectHeader divList'>
            <h1>Modpod</h1>
            <h4>Experience designer</h4>
            <h6>(Sep 2018 - Apr 2019)</h6>
            <h6>Tools: Photoshop, XD, Sketch Up, Blender, Unreal</h6>
          </div>
        </div>
        {/* <ProjectPage title={modpod.title} date={modpod.date} /> */}
        <div className='projectDesc'>
          <p>
            For our second year in the Interaction Design program at GBC, we
            were asked to develop an immersive environment to be showcased at
            the annual year-end show. The question we aimed to answer was this,
            "what does it mean to live autonomously?"
          </p>
          <p>
            Throughout the school year, we worked from research, conception,
            design, and finally to the development of our immersive environment.
          </p>
          <p>
            We pitched MODPOD -- a modular home system to solve the problem of
            autonomous living in the digital age where factors such as climate
            change and cost of living are becoming more critical.
          </p>
          <p>
            MODPOD would allow users to contsruct their home using 'panels' --
            durable pieces that could be connected together to create a box-like
            structure. Each panel would have a different function; including
            heating, lighting, entertainment, etc.
          </p>
          <p>
            Due to time constraints and the technical abilities of the team, we
            opted to create the experience in virtual reality as opposed to
            building the actual structure in the real world. This allowed us to
            be more fantastical with our idea, while also challenging the team.
          </p>
          <p>
            Our final virtual reality experience was showcased at the Year-End
            Show at the College, where participants could partake in building
            their own MODPOD by connecting panels in a virtual space. I along
            with some of my team members facilitated this showcase, guiding
            people through the experience.
          </p>
        </div>
        <div className='projectImgs'>
          <div className='projectImgAlign3'>
            <Image src={millenials} alt='' />
          </div>
          <div className='projectImgAlign6'>
            <Image src={researchBerber} alt='' />
          </div>
          <div className='projectImgAlign6'>
            <Image src={researchMongolian} alt='' />
          </div>
          <div className='projectImgAlign6'>
            <Image src={researchSubarctic} alt='' />
          </div>
          <div className='projectImgAlign6'>
            <Image src={researchYoruk} alt='' />
          </div>
          <div className='projectImgAlign1' id='modpodImg6'>
            <Image src={modpodHundredQs} alt='' />
          </div>
          <div className='projectImgAlign1' id='modpodImg7'>
            <Image src={modpod_yurt} alt='' />
          </div>
          <div className='projectImgAlign1' id='modpodImg8'>
            <Image src={modpod_geodesic} alt='' />
          </div>
          <div className='projectImgAlign3'>
            <Image src={modpodSketches} alt='' />
          </div>
          <div className='projectImgAlign1'>
            <Image src={modpodModel1} alt='' />
          </div>
          <div className='projectImgAlign6' id='modpodImg11'>
            <Image src={modpodModel3} alt='' />
          </div>
          <div className='projectImgAlign1'>
            <Image src={modpodModel2} alt='' />
          </div>
          <div className='projectImgAlign1' id='modpodImg13'>
            <Image src={vrDemo} alt='' />
          </div>
          <div className='projectImgAlign6'>
            <Image src={modpod3DModel1} alt='' />
          </div>
          <div className='projectImgAlign6'>
            <Image src={panelsVariety} alt='' />
          </div>
          {/* <div className='projectImgAlign1'>
            <Image src={vrView1} alt='' />
          </div>
          <div className='projectImgAlign6'>
            <Image src={modpodUI} alt='' />
          </div> */}
          <div className='projectImgAlign3'>
            <Image src={vrView2} alt='' />
          </div>
        </div>
        <div className='projectNavigation'>
          <Link
            to={{
              pathname: `/projects/measure`,
              // projectProps: { title, img, desc },
            }}
          >
            <p>previous</p>
          </Link>
          <Link
            to={{
              pathname: `/projects/anamorphic`,
              // projectProps: { title, img, desc },
            }}
          >
            <p>next</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Modpod;
