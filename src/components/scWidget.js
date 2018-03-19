import React, { Component } from 'react';

class SCWidget extends Component {

  render() {
    return (
      <iframe width="100%" height="350"
        scrolling="no" frameBorder="no"
        title="magnet-podcast"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/86732018&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
      </iframe>
    );
  }
}

export default SCWidget;
