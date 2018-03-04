import React, { Component } from 'react';
import Dropdown from './dropdown';

class Header extends Component {
  render() {

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

export default Header;
