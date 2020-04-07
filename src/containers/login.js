import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import gdsicon from './../img/gdsicon.png';

class Login extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="container">
                    <div className="login">
                        <div className="title">
                            <p className="text-center">GDS Agent App</p>
                        </div>
                        <div className="content">
                            <div className="logo">
                                <img src={gdsicon} alt="GDS"/>
                            </div>
                            <button className="btn-com">
                                <Link to="/signin" className="cl-white" value="dashboard">Login</Link>
                            </button>
                            <button className="btn-com">
                                <Link to="/signup" className="cl-white" value="dashboard">Signup</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
