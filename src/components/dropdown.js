import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import NavButton from './navButton';
import cx from 'classnames';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, linkClicked: false };
    this.navToggle = this.navToggle.bind(this);
    this.onRouteChanged = this.onRouteChanged.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  handleClick() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  }

  onRouteChanged() {
    this.setState({ linkClicked: true });
  }

  // Function passed from Dropdown parent to NavButton child.
  // 'this' refers to the Dropdown component
  navToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

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

    const activeClass = cx({
      active: this.state.isOpen
    });

    let navigation =
    <div id="topNav" className={"navigation " + activeClass}>
      <NavButton action={this.navToggle}  />

      <ul onClick={this.handleClick} className="menulist">
        <li>{bioLink}</li>
        <li>{videoLink}</li>
        <li>{galleryLink}</li>
        <li>{magnetPodcastLink}</li>
        <li>{truthLink}</li>
        <li>{contactLink}</li>
      </ul>
    </div>;

    return navigation;
  }
}

export default withRouter(Dropdown);
