import React, { Component } from 'react';
import ResponsiveEmbed from 'react-responsive-embed';

class Video extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <ResponsiveEmbed className="embedded-video"
        src={"https://www.youtube.com/embed/" + this.props.embedCode}
        allowFullScreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"
      />
    );
  }
}

export default Video;
