import React, { Component } from 'react';
import NavButton from './navButton';
import LinksMenu from './linksMenu';
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

    const activeClass = cx({ active: this.state.isOpen });

    return (
      <div id="topNav" className={"navigation " + activeClass}>
        <NavButton action={this.navToggle}  />
        <LinksMenu />
      </div>
    );
  }
}

export default Dropdown;
