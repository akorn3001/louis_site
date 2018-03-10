import React, { Component } from 'react';
import RedButton from '../red_button.png';
import BlackButton from '../black_button.png';

class VideoThumbnail extends Component {
  constructor(props) {
    super(props);

    this.state = { hover: false };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState({ hover: true });
  }

  mouseOut() {
    this.setState({ hover: false });
  }

  render() {
    let playButton = (this.state.hover ? RedButton : BlackButton);

    return(
      <div className="thumbnail-wrapper" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <img className="video-thumbnail"
          alt="thumbnail"
          src={"https://img.youtube.com/vi/" + this.props.embedCode + "/maxresdefault.jpg"}
        />
        <img className="thumbnail-play"
          alt="video-play-button"
          src={playButton}
          width="15%" height="15%"
        />
      </div>
    );
  }
}

export default VideoThumbnail;
