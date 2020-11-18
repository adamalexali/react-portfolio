import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ExplorationsCard from './ExplorationsCard';
import modpodImg from '../../images/projectCards/modpodImg.png';

class Explorations extends Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  render() {
    return (
      <div>
        <div id='projectsPageSection' className='sectionContainer'>
          <div id='projectsPageHeadline'>
            <div>
              <h2>×</h2>
              <div className='h2Highlight'>
                <h2>explorations</h2>
              </div>
            </div>
            <div>
              <p>
                Explore! Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Tempora, alias. Quia ratione at iusto eos? Consequatur
                impedit corrupti quod unde, voluptates repellat expedita?
                Consequatur accusantium facere, commodi fuga est error!
              </p>
            </div>
          </div>
          <div>
            <ExplorationsCard title='interaction' img={modpodImg} />
          </div>
          <div>
            <ExplorationsCard title='development' img={modpodImg} />
          </div>
          <div>
            <ExplorationsCard title='3d' img={modpodImg} />
          </div>
          <div>
            <ExplorationsCard title='motion graphics' img={modpodImg} />
          </div>
          <div>
            <ExplorationsCard title='extended reality' img={modpodImg} />
          </div>
          <div>
            <ExplorationsCard title='data &amp; iot' img={modpodImg} />
          </div>
        </div>
      </div>
    );
  }
}

export default Explorations;
