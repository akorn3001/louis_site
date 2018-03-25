import React, { Component } from 'react';

class Contact extends Component {

  render () {
    return (
      <div className="contact-wrapper">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdwhCqbDFgIZQvmPs0Q_7jQVubw-ko_d4-8XYK1ulGZClCJkA/viewform?embedded=true"
          className="google-form"
          title="contact-form"
          width="100%" height="1000" frameBorder="0"
          marginHeight="0" marginWidth="0">Loading...
        </iframe>
      </div>
    );
  }
}

export default Contact;


// <div className="contact-img-container">
//   <img src={Airplane} alt="airplane"/>
// </div>
// <span>
//   Send me an email at louiskornfeld@gmail.com.
// </span>
