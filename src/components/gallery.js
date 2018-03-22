import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import MDSpinner from 'react-md-spinner';

class Gallery extends Component {

  render () {
    const images = [
      {
        original: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/original/K%26A+1.jpg",
        thumbnail: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/thumb/K%26A+1_tn.jpg"
      },
      {
        original: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/original/K%26A+2.jpg",
        thumbnail: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/thumb/K%26A+2_tn.jpg"
      },
      {
        original: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/original/K%26A+3.jpg",
        thumbnail: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/thumb/K%26A+3_tn.jpg"
      },
      {
        original: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/original/K%26A+4.jpg",
        thumbnail: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/thumb/K%26A+4_tn.jpg"
      },
      {
        original: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/original/Louis+%26+Ira+Glass.jpg",
        thumbnail: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/thumb/Louis+%26+Ira+Glass_tn.jpg"
      },
      {
        original: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/original/Louis+%26+Joe+Bill.jpg",
        thumbnail: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/thumb/Louis+%26+Joe+Bill_tn.jpg"
      },
      {
        original: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/original/Louis+more.jpg",
        thumbnail: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/thumb/Louis+more_tn.jpg"
      },
      {
        original: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/original/Louis+black+%26+white.jpg",
        thumbnail: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/thumb/Louis+black+%26+white_tn.jpg"
      },
      {
        original: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/original/Louis+campfire+1.jpg",
        thumbnail: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/thumb/Louis+campfire+1_tn.jpg"
      },
      {
        original: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/original/Louis+campfire+2.jpg",
        thumbnail: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/thumb/Louis+campfire+2_tn.jpg"
      },
      {
        original: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/original/Louis+campfire+3.jpg",
        thumbnail: "https://s3.amazonaws.com/louiskornfeld-gallery-images/LK-gallery-images/thumb/Louis+campfire+3_tn.jpg"
      }
    ];

    return (
      <div className="gallery-container">
        <h3>GALLERY</h3>
        <div className="gallery-wrapper">
          <ImageGallery
            className="image-gallery"
            showBullets={true}
            showIndex={true}
            showPlayButton={false}
            items={images}
          />
        </div>
      </div>
    );
  }
}

export default Gallery;
