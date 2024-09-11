

import { Link } from "react-router-dom";
import '../Home/Home.css'
import image from '../images/me.png'
import React from "react";
import Aboutus from './../About/About';



const HomePage = () => {
  return (
    <>
    <div className="homepage">
    <img src={image} alt="image not found" className="title" />
  
      <div className="background-animation"></div>

      <div className="content">
        <h1 className="title">Hey</h1>
        <h1 className="title">I'm Kailash  Singh</h1>
        <p className="subtitle">I am a Mern Stack Developer</p>
        <div className="cta-buttons">
          <Link ><button className="cta-button">My Projects</button></Link>
          <Link ><button className="cta-button cta-button-secondary">Contact Me</button></Link>
        </div>
      </div>
      <div className="icons">
       

      </div>
 
     
    </div>
    <Aboutus/>
    </>
  );
};

export default HomePage;
