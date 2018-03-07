import React, { Component } from 'react';
import NavButton from './navButton';
import LinksMenu from './linksMenu';
import cx from 'classnames';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    this.navToggle = this.navToggle.bind(this);
  }

  navToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const activeClass = cx({ active: this.state.isOpen });

    return (
      <div id="topNav" className={["navigation", activeClass].join(' ')}>
        <NavButton attr={this.state.isOpen} buttonAction={this.navToggle} />
        <LinksMenu linksAction={this.navToggle} />
      </div>
    );
  }
}

export default Dropdown;
