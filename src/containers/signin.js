import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import icon from '../img/icon.png';
import singin from '../img/signin.png';
class Signin extends Component {
    render() {
        return(
            <div className="wrap"><div className="container">
                <div className="singin">
                    <div className="title">
                        <p className="text-center">GDS Agent App</p>
                    </div>
                    <div className="content">
                        <div className="signin">
                            <p className="title">Sing In</p>
                            <img src={icon} alt="SIGNIN"/>
                        </div>
                        <div className="form">
                            <input type="text" name="" placeholder="Email" required=""/>
                            <input type="text" name="" placeholder="Password" required=""/>
                            <button className="btn-com btn-m-t"><Link to="/dashboard" className="cl-white" value="dashboard">SIGN IN</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Signin;
