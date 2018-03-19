import React, { Component } from 'react';
import SCWidget from './scWidget';

class MagnetPodcast extends Component {

  render() {
    return (
      <div className="magnet-podcast">
        <h3>MAGNET THEATER PODCAST</h3>
          <div className="podcast-wrapper">
            <SCWidget />
          </div>
      </div>
    );
  }
}

export default MagnetPodcast;
