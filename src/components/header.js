import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';

class Header extends Component {
  
  render() {
    let navigation;
    
    const bioLink = 
    <NavLink className="menuitem"
      activeClassName="active-link" 
      activeStyle={{ color: "#444444" }} to="/bio">Bio
    </NavLink>;
    
    const videoLink = 
    <NavLink className="menuitem"
      activeClassName="active-link" 
      activeStyle={{ color: "#444444" }} to="/videos">Videos
    </NavLink>;
    
    const galleryLink = 
    <NavLink className="menuitem"
      activeClassName="active-link" 
      activeStyle={{ color: "#444444" }} to="/gallery">Gallery
    </NavLink>;
    
    const magnetPodcastLink = 
    <a className="menuitem" href="https://soundcloud.com/magnettheaterpodcast">Magnet Podcast
    </a>;
    
    const truthLink = 
    <a className="menuitem" href="http://www.thetruthpodcast.com/">The Truth
    </a>;
    
    const contactLink = 
    <NavLink className="menuitem"
      activeClassName="active-link" 
      activeStyle={{ color: "#444444" }} to="/contact">Contact
    </NavLink>;
  
    navigation = 
    <nav id="topNav" className="navigation">
      <span id="closebtn" onClick="navToggle()">
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </span>
    
      <ul className="menulist">
        <li>{bioLink}</li>
        <li>{videoLink}</li>
        <li>{galleryLink}</li>
        <li>{magnetPodcastLink}</li>
        <li>{truthLink}</li>
        <li>{contactLink}</li>
      </ul>
    </nav>;
    
    
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