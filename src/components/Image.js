import React, { Component } from 'react';
import { withController } from 'react-scroll-parallax';

class Image extends Component {
  handleLoad = () => {
    // updates cached values after image dimensions have loaded
    this.props.parallaxController.update();
  };

  render() {
    return (
      <div>
        <img
          className='projectImg'
          src={this.props.src}
          alt={this.props.alt}
          loading='lazy'
          onLoad={this.handleLoad}
        />
      </div>
    );
  }
}

export default withController(Image);
