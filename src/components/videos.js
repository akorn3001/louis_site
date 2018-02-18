import React, { Component } from 'react';

class Videos extends Component {
  render () {
    return (
      <div>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/tnCelSNGIRc" 
          frameborder="0" 
          allow="autoplay; encrypted-media" 
          allowfullscreen>
        </iframe>
      </div>
    );
  }
}

export default Videos;