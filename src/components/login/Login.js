import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PasswordLock from "@material-ui/icons/Lock";
import Button from '@material-ui/core/Button';
import { Redirect, Link } from 'react-router-dom';
import './Login.css';

const divStyle = {
    margin: '30px',
};
class Login extends Component {
    constructor(props) {
        super(props);
        this.loginUser = this.loginUser.bind(this)
        // this.props.loginEmployee = this.loginEmployee.bind(this)
    }
    render() {
        return (
            <React.Fragment>
                <div className="centerPage">
                    <h1>Login</h1>
                    <div>
                        <Grid container justify="center" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField id="username-input" label="Username" />
                            </Grid>
                        </Grid>
                        <Grid container justify="center" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <PasswordLock />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="password-input"
                                    label="Password"
                                    type="password"
                                />
                            </Grid>
                        </Grid>
                        <div style={divStyle}></div>
                        <Grid container justify="center" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary" 
                                    onClick={() => {this.props.loginEmployee("abc", "abcd")}}>
                                    Login
                                    </Button>
                            </Grid>
                        </Grid>
                        <div style={divStyle}></div>
                        <Grid container justify="center" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <div>If you don't have an account. <Link to="/signup">Signup</Link></div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    loginUser(){
        return <Redirect to="/home" />
    }
}

export default Login;