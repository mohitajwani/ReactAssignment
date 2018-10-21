import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Homepage = () => (<div>Homepage</div>)
const Login = (props) => (<div>
    <Route path={`${props.match.path}/login`} component={Login} />
</div>)
const Signup = (props) => (<div>
    <Route path={`${props.match.path}/signup`} component={Signup} />
</div>)

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
                    <Route render={() => (<h1>Header</h1>)} />
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/" component={Homepage} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}
export default App; 