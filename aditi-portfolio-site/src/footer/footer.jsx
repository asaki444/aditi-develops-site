import React from 'react';
import './footer.scss';
import {FaLinkedin, FaTwitter, FaGithub, FaMedium} from 'react-icons/fa';
import {TiDocumentText } from "react-icons/ti";


export default function Footer (){


    return(

        <div className="footer">
           <>
           <a href="https://www.linkedin.com/in/aditigreen/">   
           <FaLinkedin className="footer-icon" /> </a>
         <a href="https://twitter.com/AditiGre"> 
         <FaTwitter className="footer-icon" />
             </a>    
             <a href="https://github.com/asaki444">
             <FaGithub className="footer-icon" />    
            </a>
             <a href="https://medium.com/@AditiGre"> 
             <FaMedium className="footer-icon" />
             </a>
              <a href="https://docs.google.com/document/d/1UxNQ7Tin3nDH95mHgjjptGCf38E6ze_LGG_3NqBVey0/edit?usp=sharing">
              <TiDocumentText className="footer-icon" />
                  </a> 
           </>
           <p>
               ADITI DEVELOPS
           </p>
        </div>
        )
}