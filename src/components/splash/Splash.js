import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

class Splash extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>Welcome to EMS!</p>
                        <p>This project is made by Mohit Ajwani</p>
                    </header>
                </div>
            </React.Fragment>
        );
    }
}

export default Splash;