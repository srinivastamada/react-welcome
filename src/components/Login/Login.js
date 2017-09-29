import React, {Component} from 'react';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="row" id="Body">
        <div className="medium-5 columns left">
        <h4>Login</h4>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username"/>
        <label>Password</label>
        <input type="password" name="password"  placeholder="Username"/>
        <input type="submit" className="button success" value="Login"/>
        <a href="/signup">Registration</a>
        </div>
      </div>
    );
  }
}

export default Login;