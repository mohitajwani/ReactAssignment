import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import AppPage from '../App';

const Homepage = () => (<div>Homepage</div>)

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: true,
            isLoggedIn: false,
        }
    }
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/home" component={Homepage} />
                    <Route path="/" component={AppPage} />
                </Switch>
            </React.Fragment>
        );
    }
}
export default App; 