import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class LinksMenu extends Component {
  constructor(props) {
    super(props);

    this.state = { linkColor : "#444444" };

    this.updateLinkColor = this.updateLinkColor.bind(this);
  }

  componentWillMount() {
    this.updateLinkColor();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateLinkColor);
  }

  componendDidUnmount() {
    window.removeEventListener("resize", this.updateLinkColor);
  }

  updateLinkColor() {
    this.setState({ linkColor: (window.innerWidth < 601 ? "white" : "#444444" )});
  }

  render() {

    const bioLink =
    <NavLink className="menuitems"
      activeClassName="active-link"
      activeStyle={{ color: this.state.linkColor }}
      to="/bio">Bio
    </NavLink>;

    const videoLink =
    <NavLink className="menuitems"
      activeClassName="active-link"
      activeStyle={{ color: this.state.linkColor }}
      to="/videos">Videos
    </NavLink>;

    const galleryLink =
    <NavLink className="menuitems"
      activeClassName="active-link"
      activeStyle={{ color: this.state.linkColor }}
      to="/gallery">Gallery
    </NavLink>;

    const magnetPodcastLink =
    // <a className="menuitems" href="https://soundcloud.com/magnettheaterpodcast">Magnet Podcast
    // </a>;
    <NavLink className="menuitems"
      activeClassName="active-link"
      activeStyle={{ color: this.state.linkColor }}
      to="/magnet-podcast">Magnet Podcast
    </NavLink>;


    const truthLink =
    <a className="menuitems" href="http://www.thetruthpodcast.com/">The Truth
    </a>;

    const contactLink =
    <NavLink className="menuitems"
      activeClassName="active-link"
      activeStyle={{ color: this.state.linkColor }}
      to="/contact">Contact
    </NavLink>;

    return (
      <ul onClick={this.props.closeNav} className="menulist">
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
