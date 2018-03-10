import React, { Component } from 'react';

class VideoThumbnail extends Component {
  render() {
    return(
      <div className="thumbnail">
        <img src={this.props.imgURL} />
      </div>
    );
  }
}

export default VideoThumbnail;
