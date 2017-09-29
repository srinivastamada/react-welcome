import React, {Component} from 'react';

import './Signup.css';

class Signup extends Component {
  render() {
    return (
      <div className="row " id="Body">
        <div className="medium-5 columns left">
        <h4>Signup</h4>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username"/>
        <label>Password</label>
        <input type="password" name="password"  placeholder="Password"/>
        <label>Email</label>
        <input type="password" name="password"  placeholder="Email"/>
        <input type="submit" className="button" value="Sign Up"/>
        <a href="/login">Login</a>
        </div>
        
      </div>
    );
  }
}

export default Signup;