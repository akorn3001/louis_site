import React, { Component } from 'react';
// import LazyLoad from 'react-lazy-load';

class MagnetPodcast extends Component {
  render() {
    return (
      <div className="magnet-podcast">
        <h3>MAGNET THEATER PODCAST</h3>
        <div className="podcast-wrapper">
          <iframe width="100%" height="350"
            scrolling="no" frameBorder="no"
            title="magnet-podcast"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/86732018&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
          </iframe>
        </div>
      </div>
    );
  }
}

export default MagnetPodcast;
