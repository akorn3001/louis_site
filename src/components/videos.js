import React, { Component } from 'react';
import EmbeddedVideo from './embeddedVideo';

class Videos extends Component {

  render () {

    return (
      <div className="video-container">
        <h3>VIDEOS</h3>
        <EmbeddedVideo embedCode="tnCelSNGIRc" />
        <EmbeddedVideo embedCode="4cpSj3MOUec" />
        <EmbeddedVideo embedCode="iphCXKz9fMA" />
      </div>
    );
  }
}

export default Videos;
