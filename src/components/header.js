import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  
  testFunction() {
    return(event) => {
      event.preventDefault();
      alert(this.props.location.pathname);
    };
  }
  
  render() {
    let navigation;
    
    const bioLink = 
    <NavLink 
      activeClassName="active-link" 
      activeStyle={{ color:'white' }} to="/bio">Bio
    </NavLink>;
    
    const videoLink = 
    <NavLink 
      activeClassName="active-link" 
      activeStyle={{ color:'white' }} to="/videos">Videos
    </NavLink>;
    
    const galleryLink = 
    <NavLink 
      activeClassName="active-link" 
      activeStyle={{ color:'white' }} to="/gallery">Gallery
    </NavLink>;
    
    const contactLink = 
    <NavLink 
      activeClassName="active-link" 
      activeStyle={{ color:'white' }} to="/contact">Contact
    </NavLink>;
  
    navigation = 
    <nav>
      <ul className="nav-links">
        <li className="nav-link">{bioLink}</li>
        <li className="nav-link">{videoLink}</li>
        <li className="nav-link">{galleryLink}</li>
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