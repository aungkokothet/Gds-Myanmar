import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import icon from '../img/icon.png';
import singin from '../img/signin.png';
class Signup extends Component {
    render() {
        return(
            <div className="wrap"><div className="container">
                <div className="singup">
                    <div className="title">
                        <p className="text-center">GDS Agent App</p>
                    </div>
                    <div className="content">
                        <div className="signin">
                            <p className="title">Sing Up</p>
                            <img src={icon} alt="SIGNUP"/>
                        </div>
                        <div className="form">
                            <input type="text" name="" placeholder="Name" required=""/>
                            <input type="text" name="" placeholder="Phone" required=""/>
                            <input type="text" name="" placeholder="Email" required=""/>
                            <input type="text" name="" placeholder="Password" required=""/>
                            <input type="text" name="" placeholder="Comfirm" required=""/>
                            <button className="btn-com btn-m-t"><Link to="/signin" className="cl-white" value="dashboard">Sing Up</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Signup;
