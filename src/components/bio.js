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
        <img src={Headshot} className="headshot" width="400px" height="533px"/>
        <div className="bio-text">
          <h3>BIO</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Aliquam nulla facilisi cras 
            fermentum odio. Sodales ut etiam sit amet nisl purus 
            in. Aliquam sem fringilla ut morbi tincidunt. Mauris 
            in aliquam sem fringilla ut morbi tincidunt augue. 
            Convallis convallis tellus id interdum velit. Nam 
            aliquam sem et tortor consequat. Pharetra massa massa 
            ultricies mi quis hendrerit. Vitae semper quis lectus 
            nulla at volutpat diam. Sed risus ultricies tristique 
            nulla aliquet enim. Porttitor leo a diam sollicitudin 
            tempor id eu nisl nunc. Ac feugiat sed lectus vestibulum 
            mattis ullamcorper velit sed.
            <br/>
            <br/>
            Proin nibh nisl condimentum id venenatis a condimentum 
            vitae. Proin libero nunc consequat interdum. Augue neque 
            gravida in fermentum et. Enim facilisis gravida neque 
            convallis a cras. Mattis nunc sed blandit libero volutpat 
            sed cras ornare. Pellentesque nec nam aliquam sem et tortor 
            consequat id. Facilisi etiam dignissim diam quis enim lobortis 
            scelerisque fermentum dui. Id porta nibh venenatis cras sed. 
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu 
            dictum. Velit egestas dui id ornare arcu odio ut sem. Tristique 
            senectus et netus et.
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Bio);