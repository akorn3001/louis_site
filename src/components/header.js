import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
  render() {
    let navigation;
    
    const bioLink = <Link to="/bio">Bio</Link>;
    const videoLink = <Link to="/videos">Videos</Link>;
    const galleryLink = <Link to="/gallery">Gallery</Link>;
    const contactLink = <Link to="/contact">Contact</Link>;
  
    navigation = 
    <ul className="nav-links">
      <li className="nav-link">{bioLink}</li>
      <li className="nav-link">{videoLink}</li>
      <li className="nav-link">{galleryLink}</li>
      <li className="nav-link">{contactLink}</li>
    </ul>;
    
    
    return (
      <div>
        <header>
          <span>
            Louis Kornfeld
          </span>
        </header>
        {navigation}
      </div>
    );
  }
}

export default withRouter(Header);