import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class LinksMenu extends Component {

  render() {
    const bioLink =
    <NavLink className="menuitems"
      activeClassName="active-link"
      activeStyle={{ color: "#444444" }} to="/bio">Bio
    </NavLink>;

    const videoLink =
    <NavLink className="menuitems"
      activeClassName="active-link"
      activeStyle={{ color: "#444444" }} to="/videos">Videos
    </NavLink>;

    const galleryLink =
    <NavLink className="menuitems"
      activeClassName="active-link"
      activeStyle={{ color: "#444444" }} to="/gallery">Gallery
    </NavLink>;

    const magnetPodcastLink =
    <a className="menuitems" href="https://soundcloud.com/magnettheaterpodcast">Magnet Podcast
    </a>;

    const truthLink =
    <a className="menuitems" href="http://www.thetruthpodcast.com/">The Truth
    </a>;

    const contactLink =
    <NavLink className="menuitems"
      activeClassName="active-link"
      activeStyle={{ color: "#444444" }} to="/contact">Contact
    </NavLink>;

    return (
      <ul className="menulist">
        <li>{bioLink}</li>
        <li>{videoLink}</li>
        <li>{galleryLink}</li>
        <li>{magnetPodcastLink}</li>
        <li>{truthLink}</li>
        <li>{contactLink}</li>
      </ul>
    );
  }
}

export default withRouter(LinksMenu);
