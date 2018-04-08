import React, { Component } from 'react';
import logo from '../../assets/logo.svg';

class Header extends Component {
    render() {
        return (
            <header id="sm-header" className="App-header sm-header sm-section">
                <div className="container-fluid">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>
                        TOPIC EXTRACTION
                    </h1>
                    <div className="sm-login">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </div>{/*End login*/}
                </div>


            </header>
        );
    }
}

export default Header;
