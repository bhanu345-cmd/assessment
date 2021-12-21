import React from 'react';
import './Navbar.css';
const NavBar=()=>{
    return( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
    <a className="navbar-brand" href="#">
        <h4>Courses Dashboard</h4>
        <p>Hello Ar,Shekar welcome back!</p>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="form-inline my-2 my-lg-0 mx-auto">
        <div className="input-group">
                <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-pencil-alt"></i></span>
                </div>
                <input type="text" placeholder="search dashboard" className="form-control"/>
        </div>
      </form>
      <ul className="navbar-nav  ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#"><span><i className="material-icons" style={{fontSize:"18px",marginTop:"4px"}}>chat</i></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><span><i className="far fa-bell" style={{fontSize:"18px",borderRadius:"50%"}}></i></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><span><i className="fa fa-user-circle" style={{fontSize:"26px",borderRadius:"50%"}}></i></span></a>
        </li>
      </ul>
    </div>
  </nav>
  )
}
export default NavBar;