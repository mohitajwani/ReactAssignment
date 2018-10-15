import React, { Component } from 'react';
import Splash from './Splash.js'
import Login from './Login.js'
import Signup from './Signup.js'
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
        {this.state.splashTimeout ? <div><Login /><Signup /></div> : <Splash />}
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.updateInterval = setTimeout(() => {
      this.onInterval()
    }, 4000)
  }
}

export default App;
