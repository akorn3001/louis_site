import React, { Component } from 'react';

class NavButton extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    let menuIcon = [this.refs.line.previousElementSibling, this.refs.line, this.refs.line.nextElementSibling];

    menuIcon.forEach(el => {
      el.classList.toggle("active");
    });

    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {

    return (
      <span id="closebtn" onClick={this.toggleButton}>
        <span className="line1"></span>
        <span className="line2" ref="line"></span>
        <span className="line3"></span>
      </span>
    );
  }
}

export default NavButton;
