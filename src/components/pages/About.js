import React from "react";
import ProfilePic from "./images/0.jpg"
const About = () => (
  

        <div className="col-md-7 aboutMe">
            <header>About Me</header>
            <hr/>
            <div className="three columns">
            <img className="profile-pic"  src={ProfilePic} alt="My profile" />
         </div>
     
    <p> I am a recent graduate from UW Coding boot camp. With this certification, i am now proficient in HTML5, CSS3, JavaScript.  
    </p>
    <p>I am looking for a front end development job. </p>
    <ul>
    <li> <a href="https://www.linkedin.com/in/katie-dickson100/">Visit my LinkedIn</a> </li>
    <li> <a href="https://github.com/katieedicksonn">Visit My GitHub</a></li>
    </ul>
  
</div>


  );



export default About;
