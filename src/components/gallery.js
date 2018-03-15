import React, { Component } from 'react';
import ImageModal from './imageModal';
import Pic1 from '../gallery_pics/pic1.jpg';
import Pic2 from '../gallery_pics/pic2.jpg';
import Pic3 from '../gallery_pics/pic3.jpg';
import Pic4 from '../gallery_pics/pic4.jpg';
import Pic5 from '../gallery_pics/pic5.jpg';
import Pic6 from '../gallery_pics/pic6.jpg';
import Pic7 from '../gallery_pics/pic7.jpg';
import Pic8 from '../gallery_pics/pic8.jpg';
import Pic9 from '../gallery_pics/pic9.jpg';
import Pic10 from '../gallery_pics/pic10.jpg';
import Pic11 from '../gallery_pics/pic11.jpg';
import Pic12 from '../gallery_pics/pic12.jpg';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false, imgSrc: null };

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal(e) {
    this.setState({
      show: true,
      imgSrc: e.target.src
    });
  }

  closeModal() {
    this.setState({
      show: false,
      imgSrc: null
    });
  }

  render () {

    return (
      <div className="gallery-container">
        <ImageModal closeModal={this.closeModal} imgSrc={this.state.imgSrc} show={this.state.show} />
        <h3>GALLERY</h3>
        <div onClick={this.showModal} className="img-gallery">
          <img className="gallery-pic" src={Pic1} />
          <img className="gallery-pic"  src={Pic2} />
          <img className="gallery-pic"  src={Pic3} />
          <img className="gallery-pic"  src={Pic4} />
          <img className="gallery-pic"  src={Pic5} />
          <img className="gallery-pic"  src={Pic6} />
          <img className="gallery-pic"  src={Pic7} />
          <img className="gallery-pic"  src={Pic8} />
          <img className="gallery-pic"  src={Pic9} />
          <img className="gallery-pic"  src={Pic10} />
          <img className="gallery-pic"  src={Pic11} />
          <img className="gallery-pic"  src={Pic12} />
        </div>

      </div>
    );
  }
}

export default Gallery;
