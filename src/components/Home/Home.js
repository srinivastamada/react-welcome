import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';

class Home extends Component {

  render() {
    if(!localStorage.getItem('userData')){
      return (<Redirect to={'/login'}/>)
    }

    return (
      <div className="row small-up-2 medium-up-3 large-up-4" id="Body">
        <div className="medium-12 columns">
          <h2>Home</h2>
        </div>
      </div>
    );
  }
}

export default Home;