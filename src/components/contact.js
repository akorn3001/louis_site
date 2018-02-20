import React, { Component } from 'react';
import Airplane from '../airplane.png';

class Contact extends Component {
  render () {
    return (
      <div className="contact-container">
        <h3>CONTACT</h3>
        <div className="contact-img-container">
          <img src={Airplane} alt="airplane"/>
        </div>
        <span>
          Contact me at louiskornfeld@gmail.com!
        </span>
      </div>
    );
  }
}

export default Contact;