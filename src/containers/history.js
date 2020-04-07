import React,{ Component } from 'react';
import {Link} from "react-router-dom";
import { TiArrowBackOutline } from 'react-icons/ti';
import { AiFillPlusCircle } from 'react-icons/ai';
class History extends Component{
    render() {
        return(
            <div className="wrap">
                <div className="dashboard main-content">
                    <div className="title">
                        <p className="text-center">
                            <Link to="/dashboard" className="cl-white bk-btn" value="dashboard"><TiArrowBackOutline/></Link>GDS Agent App</p>
                    </div>
                    <div className="history inn-content">
                        <div className="detail">
                            <p className="name">U MG</p>
                            <p className="acc">097728393883483334</p>
                            <p className="amount">MMK - 300,000 </p>
                        </div>
                        <div className="detail">
                            <p className="name">U Mya</p>
                            <p className="acc">0098393883483334</p>
                            <p className="amount">MMK - 100,000 </p>
                        </div>
                        <div className="detail">
                            <p className="name">U Hla</p>
                            <p className="acc">100879393883483334</p>
                            <p className="amount">MMK - 200,000 </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default History;
