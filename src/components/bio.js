import React, { Component } from 'react';
import Headshot from '../louis.png';
import { withRouter } from 'react-router-dom';

class Bio extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {

    return (
      <div className="bio">
        <div className="headshot-wrapper">
          <img src={Headshot} alt="headshot" className="headshot" width="400px" height="533px"/>
        </div>

        <div className="bio-text">
          <div className="bio-h3-container"><h3>BIO</h3></div>
          <p>
            Louis Kornfeld is a writer / actor / director and veteran ensemble member
            at the Magnet Theater in New York City, where he can be seen performing
            his weekly duo show "Kornfeld & Andrews."
            <br/>
            <br/>
            Louis has created and developed numerous improvisational formats including
            The Blackout, Story Story, and The Acid Trip. He has directed musicals and
            plays such as 'Pope: The Musical,' 'Space Twin' and 'Ugh: A Christmas Show.'
            He also spent three years as Managing Director of Megawatt at the Magnet Theater,
            where he oversaw the casting and direction of a multitude of house teams.
            <br/>
            <br/>
            Louis is a seasoned improviser and has traveled all around North America
            performing and teaching, playing in Austin, Vancouver, Detroit and
            Honolulu, to name just a few places. He has also appeared as a cast
            member with the Second City as part of their partnership with Norwegian
            Cruise Line.
            <br/>
            <br/>
            He holds a BFA in film production from SUNY Purchase.
          </p>


        </div>
      </div>
    );
  }
}

export default withRouter(Bio);
