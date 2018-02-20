import React, { Component } from 'react';
import ResponsiveEmbed from 'react-responsive-embed';

// RESPONSIVE EMBED CODE
class EmbeddedVideo extends Component {
  render (source) {
    return (
        <ResponsiveEmbed src={source}
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen" 
          msallowfullscreen="msallowfullscreen" 
          oallowfullscreen="oallowfullscreen" 
          webkitallowfullscreen="webkitallowfullscreen"
        />
      );
    }
  }
  
  export default EmbeddedVideo;