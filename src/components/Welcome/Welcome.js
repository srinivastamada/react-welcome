import React, {Component} from 'react';

import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="row " id="Body">
        <div className="medium-12 columns">
          <h2 id="welcomeText">Make people fall in love with your ideas</h2>

          <a href="/login" className="button">Login</a>
          <a href="/signup" className="button success">Signup</a>
        </div>
      </div>
    );
  }
}

export default Welcome;