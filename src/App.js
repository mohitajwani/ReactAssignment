import React, { Component } from 'react';
import Splash from './components/splash/Splash.js'
import { Redirect } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      splashTimeout: false
    }
  }

  onInterval() {
    // Check if token is available, redirect to home else Login
    this.setState({
      splashTimeout: true
    })
  }

  render() {
    return (
        <React.Fragment>
          {this.state.splashTimeout ? <Redirect to="/login" /> : <Splash />}
        </React.Fragment>
    );
  }

  componentDidMount() {
    this.updateInterval = setTimeout(() => {
      this.onInterval()
    }, 1)
  }
}

export default App;
