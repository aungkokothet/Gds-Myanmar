import React,{ Component } from 'react';
import {Link} from "react-router-dom";
import { TiArrowBackOutline } from 'react-icons/ti';
import { AiFillPlusCircle } from 'react-icons/ai';
class PartnerApps extends Component{
    render() {
        return(
            <div className="wrap">
                <div className="dashboard main-content">
                    <div className="title">
                        <p className="text-center">
                            <Link to="/dashboard" className="cl-white bk-btn" value="dashboard"><TiArrowBackOutline/></Link>GDS Agent App</p>
                    </div>
                    <div className="history inn-content">
                        <p className="text-center">HandlePatner Apps</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default PartnerApps;
