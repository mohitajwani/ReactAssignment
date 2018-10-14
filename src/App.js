import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from './Splash.js'
//import axios from 'axios';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      splashTimeout: false
    }
  }

  onInterval(){
    this.setState({
      splashTimeout: true
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.splashTimeout ? <div>Login Page</div> : <Splash />}
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.updateInterval = setTimeout(() => {
      this.onInterval()
    }, 2000)
  }
}

export default App;
