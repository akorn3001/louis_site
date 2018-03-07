import React, { Component } from 'react';
import NavButton from './navButton';
import LinksMenu from './linksMenu';
import cx from 'classnames';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    this.navToggle = this.navToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
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
        <NavButton attr={this.state.isOpen} buttonAction={this.navToggle} />
        <LinksMenu linksAction={this.handleClick} />
      </div>
    );
  }
}

export default Dropdown;
