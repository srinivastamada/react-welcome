import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
  
  constructor(){
    super();
    this.state={
    logout: false
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    let localData = sessionStorage.getItem('userData');
    if(localData){
      this.setState({logout: true});
    }
    
  }

  logout(){
    console.log("Logout");
    sessionStorage.setItem('userData','');
    sessionStorage.clear();
    this.setState({logout: !this.state.logout});
  }
  

  render() {

    if (!this.state.logout) {
      //return (<Redirect to={'/login'}/>)
    }
    
    return (
      <div className="secondery off-canvas position-left reveal-for-large " id="my-info" data-off-canvas data-position="left">
      <div className="row column">
        
        <h5>{this.props.name}</h5>
        {
          this.state.logout
            ? <button type="button" className="button"  onClick={this.logout}> Logout</button>
            : null
        }       
      </div>
    </div>
    );
  }
}

export default Sidebar;