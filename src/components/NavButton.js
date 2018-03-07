import React, { Component } from 'react';
import cx from 'classnames';

class NavButton extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    this.toggleButton = this.toggleButton.bind(this);
    this.clickFunctions = this.clickFunctions.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.attr !== nextProps.attr) {
      this.toggleButton();
    }
  }

  toggleButton() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  clickFunctions() {
    this.toggleButton();
    this.props.buttonAction();
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
