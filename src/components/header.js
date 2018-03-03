import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Dropdown from './dropdown';

class Header extends Component {
  render() {

    // const bioLink =
    // <NavLink className="menuitems"
    //   activeClassName="active-link"
    //   activeStyle={{ color: "#444444" }} to="/bio">Bio
    // </NavLink>;
    //
    // const videoLink =
    // <NavLink className="menuitems"
    //   activeClassName="active-link"
    //   activeStyle={{ color: "#444444" }} to="/videos">Videos
    // </NavLink>;
    //
    // const galleryLink =
    // <NavLink className="menuitems"
    //   activeClassName="active-link"
    //   activeStyle={{ color: "#444444" }} to="/gallery">Gallery
    // </NavLink>;
    //
    // const magnetPodcastLink =
    // <a className="menuitems" href="https://soundcloud.com/magnettheaterpodcast">Magnet Podcast
    // </a>;
    //
    // const truthLink =
    // <a className="menuitems" href="http://www.thetruthpodcast.com/">The Truth
    // </a>;
    //
    // const contactLink =
    // <NavLink className="menuitems"
    //   activeClassName="active-link"
    //   activeStyle={{ color: "#444444" }} to="/contact">Contact
    // </NavLink>;
    //
    // let navigation =
    // <div id="topNav" className="navigation">
    //   <span id="closebtn">
    //     <span className="line1"></span>
    //     <span className="line2"></span>
    //     <span className="line3"></span>
    //   </span>
    //
    //   <ul className="menulist">
    //     <li>{bioLink}</li>
    //     <li>{videoLink}</li>
    //     <li>{galleryLink}</li>
    //     <li>{magnetPodcastLink}</li>
    //     <li>{truthLink}</li>
    //     <li>{contactLink}</li>
    //   </ul>
    // </div>;


    return (
      <div>
        <header>
          <span>Louis Kornfeld</span>
        </header>
        <Dropdown />
      </div>
    );
  }
}

export default withRouter(Header);
