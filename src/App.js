import React, { Component } from 'react';

import './styles/foundation.min.css';
import './styles/custom.css';
import Routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import MobileHeader from './components/MobileHeader/MobileHeader';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {

  constructor(){
    super();
    this.state={
      appName: "Banana"
    }
  }

  render() {
    return (
      <div className="off-canvas-wrapper">
      <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>

      <Sidebar name={this.state.appName}/>

        <div className="off-canvas-content" data-off-canvas-content>
          <MobileHeader name={this.state.appName}/>
          <Header name={this.state.appName}/>
          <Routes/>
          <hr/>

         <Footer/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
