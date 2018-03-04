import React, { Component } from 'react';
import cx from 'classnames';

class NavButton extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    this.setState({ isOpen: !this.state.isOpen });
  }


  render() {
    // let children = this.props.children;
    const activeClass = cx({
      active: this.state.isOpen
    });

    return (
      <span id="closebtn" onClick={this.toggleButton}>
        <span className={"line1 " + activeClass}/>
        <span className={"line2 " + activeClass}/>
        <span className={"line3 " + activeClass}/>
      </span>
    );
  }
}

export default NavButton;
