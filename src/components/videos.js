import React, { Component } from 'react';
import ResponsiveEmbed from 'react-responsive-embed';

class Videos extends Component {
  render () {
    return (
      <div className="video-container">
        <h3>VIDEOS</h3>
        <ResponsiveEmbed src="https://www.youtube.com/embed/tnCelSNGIRc" />
        <ResponsiveEmbed src="https://www.youtube.com/embed/4cpSj3MOUec" />
        <ResponsiveEmbed src="https://www.youtube.com/embed/iphCXKz9fMA" />
      </div>
    );
  }
}

// class Videos extends Component {
//   render () {
//     return (
//       <div className="video-container">
//         <div className="youtube-player" data-id="tnCelSNGIRc"></div>
//         <div className="youtube-player" data-id="4cpSj3MOUec"></div>
//         <div className="youtube-player" data-id="iphCXKz9fMA"></div>
//       </div>
//     );
//   }
// }

export default Videos;

