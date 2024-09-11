import React from "react";
import '../About/About.css'
import image from '../images/me.png'
function Aboutus(){
    return(
        <>
        <section>
        <div className="about-cont">
            <div className="photo">
                <img src={image} alt="" />
            </div>
            <div className="about-content">
                <h1 className="abt">About Me</h1>
                <h1 className="tba">I am actively seeking opportunities to apply my acquired skills and knowledge to
                    real-world projects. My educational background has equipped me with a solid foundation in Full Stack
                    Development & algorithms and programming languages such as C/C++. Additionally, I have gained
                    practical experience through hands-on projects, both independently and collaboratively</h1>
            </div>
        </div>
    </section>
        </>
    )
}
export default Aboutus