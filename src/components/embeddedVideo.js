import React, { Component } from 'react';
import ResponsiveEmbed from 'react-responsive-embed';

class EmbeddedVideo extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false, embedCode: this.props.embedCode };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    this.setState({ clicked: true });
  }

  render() {
    let element;

    if (!this.state.clicked) {
      element =
      <img className="video-thumbnail"
        alt="thumbnail"
        src={"https://img.youtube.com/vi/" + this.state.embedCode + "/maxresdefault.jpg"}
      />;
    } 
    else {
      element =
      <ResponsiveEmbed className="embedded-video"
        src={"https://www.youtube.com/embed/" + this.state.embedCode}
        allowFullScreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"
      />;
    }

    return(
      <div onClick={this.buttonClick}>
        {element}
      </div>
    );
  }
}

export default EmbeddedVideo;
