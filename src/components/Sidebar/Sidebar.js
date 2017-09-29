import React, {Component} from 'react';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="secondery off-canvas position-left reveal-for-large " id="my-info" data-off-canvas data-position="left">
      <div className="row column">
        <br/>
        
        <h5>{this.props.name}</h5>
      </div>
    </div>
    );
  }
}

export default Sidebar;