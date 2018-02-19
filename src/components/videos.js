import React, { Component } from 'react';
import ResponsiveEmbed from 'react-responsive-embed';

class Videos extends Component {
  render () {
    return (
      <div className="video-container">
        <ResponsiveEmbed src="https://www.youtube.com/embed/tnCelSNGIRc" />
        <ResponsiveEmbed src="https://www.youtube.com/embed/4cpSj3MOUec" />
        <ResponsiveEmbed src="https://www.youtube.com/embed/iphCXKz9fMA" />
      </div>
    );
  }
}

export default Videos;

