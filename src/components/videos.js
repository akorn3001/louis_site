import React, { Component } from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import EmbeddedVideo from './EmbeddedVideo';

// RESPONSIVE EMBED CODE
class Videos extends Component {
  render () {
    return (
      <div className="video-container">
        <h3>VIDEOS</h3>
        <ResponsiveEmbed src="https://www.youtube.com/embed/tnCelSNGIRc" 
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen" 
          msallowfullscreen="msallowfullscreen" 
          oallowfullscreen="oallowfullscreen" 
          webkitallowfullscreen="webkitallowfullscreen"
        />
        <ResponsiveEmbed src="https://www.youtube.com/embed/4cpSj3MOUec" 
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen" 
          msallowfullscreen="msallowfullscreen" 
          oallowfullscreen="oallowfullscreen" 
          webkitallowfullscreen="webkitallowfullscreen"
        />
        <ResponsiveEmbed src="https://www.youtube.com/embed/iphCXKz9fMA" 
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen" 
          msallowfullscreen="msallowfullscreen" 
          oallowfullscreen="oallowfullscreen" 
          webkitallowfullscreen="webkitallowfullscreen"
        />
      </div>
    );
  }
}

// FITVIDS CODE
// class Videos extends Component {
//   render () {
//     return (
//       <div className="video-container">
//         <h3>VIDEOS</h3>
//         <iframe 
//           width="560" 
//           height="315" 
//           src="https://www.youtube.com/embed/tnCelSNGIRc" 
//           frameBorder="0" 
//           allow="encrypted-media" 
//           allowFullScreen>
//         </iframe>
// 
//         <iframe 
//           width="560" 
//           height="315" 
//           src="https://www.youtube.com/embed/4cpSj3MOUec" 
//           frameBorder="0" 
//           allow="encrypted-media" 
//           allowFullScreen>
//         </iframe>
// 
//         <iframe 
//           width="560" 
//           height="315" 
//           src="https://www.youtube.com/embed/iphCXKz9fMA" 
//           frameBorder="0" 
//           allow="encrypted-media" 
//           allowFullScreen>
//         </iframe>
//       </div>
//     );
//   }
// }

// LAZY LOADING CODE
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

