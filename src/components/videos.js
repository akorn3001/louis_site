import React, { Component } from 'react';
import EmbeddedVideo from './embeddedVideo';
import MDSpinner from 'react-md-spinner';

class Videos extends Component {

  render () {
    return (
      <div className="videos-container">
        <h3>VIDEOS</h3>
        <EmbeddedVideo embedCode="tnCelSNGIRc" />
        <EmbeddedVideo embedCode="4cpSj3MOUec" />
        <EmbeddedVideo embedCode="iphCXKz9fMA" />
      </div>
    );
  }
}

export default Videos;
