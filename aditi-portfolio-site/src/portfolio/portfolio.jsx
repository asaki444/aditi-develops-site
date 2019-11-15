import React from 'react';
import './portfolio.scss';
import PortfolioWebsite from '../images/website.png';  
import ProfessionalWebsite from '../images/professional_work.png';


export default function Portfolio (){


    return(
        <div id="portfolio-page">
             <div className="projects-title">
                My Projects
             </div>
             <div className="projects-container">
                 <div className="project">
                   <img src={PortfolioWebsite}/>
                   <p>
                      Frontend: React/Sass 
                   </p>
                   <p>
                      <a href="https://github.com/asaki444/aditi-develops-site">
                      Source Code
                          </a>
                   </p>
                 </div>
                 <div className="project">
                 <img src={ProfessionalWebsite}/>
                   <p>FrontEnd: React/Sass</p>
                   <p> Backend: Java</p>
                   <p>Tools: Google Analytics for A/B test</p>
                 </div>

            </div>
        </div>
     )
}