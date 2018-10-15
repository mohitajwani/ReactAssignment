import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PasswordLock from "@material-ui/icons/Lock";
import Button from '@material-ui/core/Button';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <h1>Login</h1>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid row>
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField id="username-input" label="Username" />
                        </Grid>
                    </Grid>
                    <Grid row>
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
                </Grid>
                <Button variant="contained" color="primary">
                    Login
                </Button>
            </React.Fragment>
        );
    }
}

// const styles = theme => ({
//     margin: {
//       margin: theme.spacing.unit
//     }
//   });

//   function InputWithIcon(props) {
//     const { classes } = props;

//     return (
//       <div>
//         <div className={classes.margin}>
//           <Grid container spacing={8} alignItems="flex-end">
//             <Grid item>
//               <AccountCircle />
//             </Grid>
//             <Grid item>
//               <TextField id="input-with-icon-grid" label="Username" />
//             </Grid>
//           </Grid>
//         </div>
//       </div>
//     );
//   }

//   InputWithIcon.propTypes = {
//     classes: PropTypes.object.isRequired
//   };

export default Login;