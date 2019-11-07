import React from 'react';
import './aboutMe.scss';
import profilePic from  '../images/profile_pic.png';
import {FaReact, FaSass, FaJs, FaJava, DiRuby, DiPostgresql, TiHtml5,FaCss3Alt, FaGit} from 'react-icons/fa';

export default function AboutMe (){
  return(
      <div className="about-me-container" >
        
         <div className="left-side">
              <div className="about-me-title">
              About Me
             </div> 
             <div className="about-me-paragraph">
             I am a Community focused Software Engineer based in NYC. Besides coding into the wee hours of the night, you can spot me at the next WWCode, and GDI meetup. I, also run my own <a className="about-me-link" href="https://www.meetup.com/She-Builds-Black/">
                  meetup 
                 </a>for black women software engineers through the nonprofit  <a className="about-me-link" href="https://www.webuildblack.com/">We Build Black</a>.
             </div>
             <div className="stack-title">
                    my stack:
             </div>
             <div className="stack-icons">

             </div>
         </div>

         <div className="right-side">
             <div className="profile-img-container">
                    <img src={profilePic}/>
             </div>
             <div className="profile-icons">

             </div>
         </div>
      </div>

  )
}