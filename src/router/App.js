import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Signup from '../Signup';
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
            <BrowserRouter>
                <React.Fragment>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/home" component={Homepage} />
                        <Route path="/" component={AppPage} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}
export default App; 