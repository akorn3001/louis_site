import React, { Component } from 'react';
import cx from 'classnames';

class NavButton extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, routeChanged: false };

    this.toggleButton = this.toggleButton.bind(this);
    this.closeButton = this.closeButton.bind(this);
    this.clickFunctions = this.clickFunctions.bind(this);
  }

  componentDidUpdate() {
    if (this.state.routeChanged) {
      this.closeButton();
    }
  }

  toggleButton() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  closeButton() {
    this.setState({ isOpen: false });
  }

  clickFunctions() {
    this.toggleButton();
    this.props.action();
  }

  render() {

    const activeClass = cx({
      active: this.state.isOpen
    });

    return (
      <span id="closebtn" onClick={this.clickFunctions}>
        <span className={"line1 " + activeClass}/>
        <span className={"line2 " + activeClass}/>
        <span className={"line3 " + activeClass}/>
      </span>
    );
  }
}

export default NavButton;
