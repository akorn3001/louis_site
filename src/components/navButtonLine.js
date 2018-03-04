import React, { Component } from 'react';

class NavButtonLine extends Component {
  constructor(props) {
    super(props);

    this.state = { active: false };

    this.addActiveClass = this.addActiveClass.bind(this);
  }

  addActiveClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <span className={ this.state.active ? 'active' : null }></span>
    );
  }
}

export default NavButtonLine;
