import React, { Component } from 'react';
import Splash from './components/splash/Splash.js'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './containers/Login';
import Signup from './components/signup/Signup';

const Homepage = () => (<div>Homepage</div>)

const Dashboard = () => (<div>Dashboard</div>)

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
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Homepage} />
          </Switch>

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
