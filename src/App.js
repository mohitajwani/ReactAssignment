import React, { Component } from 'react';
import Splash from './Splash.js'
import Login from './Login.js'
import Signup from './Signup.js'
import RouterApp from './router/App'
import { BrowserRouter, Redirect } from 'react-router-dom'
import axios from 'axios';
import _ from 'lodash';

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
      <BrowserRouter>
        <React.Fragment>
          {this.state.splashTimeout ? <Redirect to="/login" /> : <Splash />}
        </React.Fragment>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    this.updateInterval = setTimeout(() => {
      this.onInterval()
    }, 1)
  }
}

export default App;
