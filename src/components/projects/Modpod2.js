import React, { Component } from 'react';
import ProjectPage from '../ProjectPage';
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
  vrView1,
  vrView2,
  vrDemo,
  modpodTeam,
  millenials,
  panelsVR,
  panelsVariety,
  modpodUI,
} from '../../images/';
import Image from '../../components/Image';
import '../../CSS/ProjectPage.css';

// const modpod = {
//   title: 'Modpod',
//   date: 'Sep 2018 - Apr 2019',
// };

export class Modpod extends Component {
  render() {
    return (
      <div className='pageDiv sectionContainer textBlock'>
        <div>
          <div className='h2Highlight'>
            <h2>Modpod</h2>
          </div>
          <h3>Experience designer</h3>
          <h5>(Sep 2018 - Apr 2019)</h5>
          <h6>Tools: Photoshop, XD, Sketch Up, Blender, Unreal</h6>
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
            Throughout the schoolyear we worked from research, to conception, to
            design, to development of our immersive environment.
          </p>
          <p>
            We pitched MODPOD -- a modular home system to solve the problem of
            autonomous living in the digital age where factors such as climate
            change and cost of living are becoming more critical.
          </p>
          <p>
            MODPOD would allow users to contruct their home using 'panels' --
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
            Our final virtual reality experience was showcased at the year end
            show, where participants could partake in building their own MODPOD
            by connecting panels in a virtual space.
          </p>
        </div>
        <div className='projectImgs'>
          <div>
            <Image src={millenials} alt='' />
          </div>
          <div>
            <Image src={researchBerber} alt='' />
          </div>
          <div>
            <Image src={researchMongolian} alt='' />
          </div>
          <div>
            <Image src={researchSubarctic} alt='' />
          </div>
          <div>
            <Image src={researchYoruk} alt='' />
          </div>
          <div>
            <Image src={modpodHundredQs} alt='' />
          </div>
          <div>
            <Image src={modpodSketches} alt='' />
          </div>
          <div>
            <Image src={modpodModel1} alt='' />
          </div>
          <div>
            <Image src={modpodModel3} alt='' />
          </div>
          <div>
            <Image src={modpodModel2} alt='' />
          </div>
          <div>
            <Image src={modpod3DModel1} alt='' />
          </div>
          <div>
            <Image src={panelsVariety} alt='' />
          </div>
          <div>
            <Image src={modpodUI} alt='' />
          </div>
          <div>
            <Image src={vrView1} alt='' />
          </div>
          <div>
            <Image src={panelsVR} alt='' />
          </div>
          <div>
            <Image src={vrDemo} alt='' />
          </div>
          <div>
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
            <p>previous project</p>
          </Link>
          <Link
            to={{
              pathname: `/projects/lotus`,
              // projectProps: { title, img, desc },
            }}
          >
            <p>next project</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Modpod;
