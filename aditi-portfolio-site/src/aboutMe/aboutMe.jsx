import React from 'react';
import './aboutMe.scss';
import profilePic from  '../images/profile_pic.png';
import {FaReact, FaSass, FaJs, FaJava, FaCss3Alt, FaGit, FaLinkedin, FaTwitter, FaGithub, FaMedium} from 'react-icons/fa';
import {  DiRuby, DiPostgresql } from "react-icons/di";
import { TiHtml5, TiDocumentText } from "react-icons/ti";

export default function AboutMe (){
  return(
      <div id="about-me-container" >
        
         <div className="left-side">
              <div className="about-me-title">
              About Me
             </div> 
             <div className="about-me-paragraph">
             I am a Community focused Software Engineer based in NYC. Besides coding into the wee hours of the night, you can spot me at the next WWCode, and GDI meetup. I, also run my own <a className="about-me-link" href="https://www.meetup.com/She-Builds-Black/">
                  meetup 
                  </a> for black women software engineers through the nonprofit  <a className="about-me-link" href="https://www.webuildblack.com/">We Build Black</a>.
             </div>
             <div className="stack-title">
                    my stack:
                    
             </div>
             <div className="stack-icons">
               <FaReact className="icon"/>
               <FaJs className="icon" />
               <FaJava className="icon" />
               <FaSass className="icon" />
               <DiRuby className="icon"/>
               <DiPostgresql className="icon"/>
               <TiHtml5 className="icon" />
               <FaCss3Alt className= "icon" />
                <FaGit className="icon" />
             </div>
         </div>

         <div className="right-side">
             <div className="profile-img-container">
                    <img src={profilePic}/>
             </div>
             <div className="profile-icons">
                 <div className="profile-title">
                   profile links:
                 </div>
        <a href="https://www.linkedin.com/in/aditigreen/">   <FaLinkedin className="profile-icon" /> </a>
         <a href="https://twitter.com/AditiGre"> 
         <FaTwitter className="profile-icon" />
             </a>    
             <a href="https://github.com/asaki444">
             <FaGithub className="profile-icon" />    
            </a>
             <a href="https://medium.com/@AditiGre"> 
             <FaMedium className="profile-icon" />
             </a>
              <a href="https://docs.google.com/document/d/1UxNQ7Tin3nDH95mHgjjptGCf38E6ze_LGG_3NqBVey0/edit?usp=sharing">
              <TiDocumentText className="profile-icon" />
                  </a> 
             </div>
         </div>
      </div>

  )
}