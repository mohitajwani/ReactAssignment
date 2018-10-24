import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountBox from "@material-ui/icons/AccountBox";
import Email from "@material-ui/icons/Email";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PasswordLock from "@material-ui/icons/Lock";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Login.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const divStyle = {
    margin: '30px',
};

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        return (
            <React.Fragment>
                <div className="centerPage">
                    <h1>Signup</h1>
                    <div>
                        <Grid container justify="center" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <AccountBox />
                            </Grid>
                            <Grid item>
                                <TextField id="name-input" label="Name" />
                            </Grid>
                        </Grid>
                        <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                name="gender2"
                                value={this.state.value}
                                onChange={this.handleChange}>

                                <FormControlLabel
                                            value="female"
                                            control={<Radio color="primary" />}
                                            label="Female"
                                            labelPlacement="end"
                                        />

                                        <FormControlLabel
                                            value="male"
                                            control={<Radio color="primary" />}
                                            label="Male"
                                            labelPlacement="end"
                                        />
                                {/* <Grid container justify="center" spacing={8} alignItems="flex-end">
                                    <Grid item>
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio color="primary" />}
                                            label="Male"
                                            labelPlacement="end"
                                        />
                                    </Grid>
                                    <Grid item>
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio color="primary" />}
                                            label="Female"
                                            labelPlacement="end"
                                        />
                                    </Grid>
                                </Grid> */}
                            </RadioGroup>
                        </FormControl>
                        <Grid container justify="center" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Email />
                            </Grid>
                            <Grid item>
                                <TextField id="email-input" label="Email" />
                            </Grid>
                        </Grid>
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
                                    label="Enter Password"
                                    type="password"
                                />
                            </Grid>
                        </Grid>
                        <Grid container justify="center" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <PasswordLock />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="confirm-password-input"
                                    label="Confirm Password"
                                    type="password"
                                />
                            </Grid>
                        </Grid>
                        <div style={divStyle}></div>
                        <Grid container justify="center" spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary">
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
}

export default Signup;