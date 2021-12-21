import React from 'react';
import './Topbar.css';
const Topbar=()=>{
    return<div className="topbar">
        <div className="col-lg-4 col-md-6">
            <div className="coursesDashboard">
                <h4>Courses Dashboard</h4>
                <p className="welcome">Hello Ar,Shekar welcome back!</p>
            </div>
        </div>
        <div className="col-lg-8 col-md-6">
        <div className="row menu">
        <div className="col-md-9">
            <div className="search">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                    </div>
                    <input type="text" placeholder="search" className="form-control"/>
                    <div className="input-group-append">
                        <span className="input-group-text">@</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="icons">
                <span className="navicon naviconItem"><i className="material-icons" style={{fontSize:"18px"}}>chat</i></span>
                <span className="navicon naviconItem"><i className="far fa-bell" style={{fontSize:"18px",borderRadius:"50%"}}></i></span>
                <span className="naviconItem"><i class="fa fa-user-circle" style={{fontSize:"26px",borderRadius:"50%"}}></i></span>
            </div>
        </div>
        </div>
        </div>
    </div>
}
export default Topbar;