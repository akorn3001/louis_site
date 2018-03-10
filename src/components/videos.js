import React, { Component } from 'react';
import Video from './video';

// RESPONSIVE EMBED CODE
class Videos extends Component {
  render () {

    return (
      <div className="video-container">
        <h3>VIDEOS</h3>
        <Video embedCode="tnCelSNGIRc" />
        <Video embedCode="4cpSj3MOUec" />
        <Video embedCode="iphCXKz9fMA" />
      </div>
    );
  }
}

export default Videos;
