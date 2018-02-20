import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Header extends Component {
  
  render() {
    let navigation;
    
    const bioLink = 
    <NavLink 
      activeClassName="active-link" 
      activeStyle={{ color: "#444444" }} to="/bio">Bio
    </NavLink>;
    
    const videoLink = 
    <NavLink 
      activeClassName="active-link" 
      activeStyle={{ color: "#444444" }} to="/videos">Videos
    </NavLink>;
    
    const galleryLink = 
    <NavLink 
      activeClassName="active-link" 
      activeStyle={{ color: "#444444" }} to="/gallery">Gallery
    </NavLink>;
    
    const magnetPodcastLink = 
    <a href="https://soundcloud.com/magnettheaterpodcast">Magnet Podcast
    </a>;
    
    const truthLink = 
    <a href="http://www.thetruthpodcast.com/">The Truth
    </a>;
    
    const contactLink = 
    <NavLink 
      activeClassName="active-link" 
      activeStyle={{ color: "#444444" }} to="/contact">Contact
    </NavLink>;
  
    navigation = 
    <nav>
      <ul className="nav-links">
        <li className="nav-link">{bioLink}</li>
        <li className="nav-link">{videoLink}</li>
        <li className="nav-link">{galleryLink}</li>
        <li className="nav-link">{magnetPodcastLink}</li>
        <li className="nav-link">{truthLink}</li>
        <li className="nav-link">{contactLink}</li>
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