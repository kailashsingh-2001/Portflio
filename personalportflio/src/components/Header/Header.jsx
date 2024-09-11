import React from "react";
import { Link,NavLink } from "react-router-dom";

import '../Header/Header.css'
// import Aboutus from './../About/About';


function Header() {
 
    return (
      <>
        <div className="nav-bar">
            <div className="navbar-content">
             <NavLink to={'/'} className="nav-btn">Home</NavLink> 
                <NavLink to="/about" className="nav-btn">About Me</NavLink>
                <NavLink to="/skills" className="nav-btn">Skills</NavLink>
                <NavLink to="/education" className="nav-btn">Education</NavLink>
                <NavLink className="nav-btn">Projects&nbsp;(Github) </NavLink>
            </div>
        </div>

       

         
      </>
    )
  }
  export default Header