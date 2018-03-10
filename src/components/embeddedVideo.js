import React, { Component } from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import VideoThumbnail from './videoThumbnail';

class EmbeddedVideo extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
    this.clickPlay = this.clickPlay.bind(this);
  }

  clickPlay() {
    this.setState({ clicked: true });
  }

  render() {
    let element;

    if (!this.state.clicked) {
      element =
      <VideoThumbnail embedCode={this.props.embedCode} />;
    }
    else {
      element =
      <ResponsiveEmbed className="embedded-video"
        src={"https://www.youtube.com/embed/" + this.props.embedCode + "?autoplay=1"}
        allowFullScreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"
      />;
    }

    return(
      <div className="video-wrapper" onClick={this.clickPlay}>
        {element}
      </div>
    );
  }
}

export default EmbeddedVideo;
