import React, { Component } from 'react';
import EmbeddedVideo from './embeddedVideo';

class Videos extends Component {

  render () {

    return (
      <div className="videos-container">
        <h3>VIDEOS</h3>
        <EmbeddedVideo embedCode="tnCelSNGIRc" />
        <EmbeddedVideo embedCode="4cpSj3MOUec" />
        <EmbeddedVideo embedCode="iphCXKz9fMA" />

        <iframe width="854" height="480" src="https://www.youtube.com/embed/p5qVxAoKwbE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    );
  }
}

export default Videos;
