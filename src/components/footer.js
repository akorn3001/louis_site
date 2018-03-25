import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer style={{display: this.props.display}}>
        <span>
          © Louis Kornfeld 2018 | Site by
          <a className="alex-link"
          href="https://www.alex-kornfeld.com"> Alex Kornfeld</a>
        </span>
      </footer>
    );
  }
}

export default Footer;
