import React, { Component } from 'react';
import cx from 'classnames';

class ImageModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal">
        <span onClick={this.props.closeModal} className="close-modal-button">×</span>
        <img src={this.props.imgSrc} />
      </div>
    );
  }
}

export default ImageModal;