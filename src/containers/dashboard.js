import React,{ Component } from 'react';
import {Link} from "react-router-dom";
import { TiArrowBackOutline } from 'react-icons/ti';
import { AiFillPlusCircle } from 'react-icons/ai';
import { IoMdListBox } from 'react-icons/io';

class Dashboard extends Component{
    render() {
        return(
            <div className="wrap">
                    <div className="dashboard main-content">
                        <div className="title">
                            <p className="text-center">
                                <Link to="/signin" className="cl-white bk-btn" value="dashboard"><TiArrowBackOutline/></Link>GDS Agent App</p>
                        </div>
                        <div className="balance inn-content">
                            <ul className="list">
                                <li>
                                    <p>Balance  <i className="float-right"> 20000 ks</i></p>
                                </li>
                            </ul>
                            <div className="app"><Link to="/partnerApp"><AiFillPlusCircle/></Link></div>
                            <div className="history-list"><Link to="/history"><IoMdListBox/></Link></div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Dashboard;
