import React from 'react';
import './navigation.scss';
import Home from '../home/home';
import AditiLogo from '../aditi-logo/aditi-logo.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

export default function NavigationBar(){
    return(
     <Router>
         <div>
           
             <div className="image-container">
            <img src={AditiLogo}/>
          </div>
         <div className="home-navigation-bar">
       
          <div className="nav-item">
          <Link to="/" className="nav-text"> Home </Link> 
          </div>
          <div className="nav-item">
            <Link to="/about-me" className="nav-text"> About Me </Link> 
          </div>
      <div className="nav-item">
        <Link to="/portfolio" className="nav-text">Portfolio</Link>
      </div>
      <div className="nav-item">
         <Link to="/community-involvement" className="nav-text">Community</Link> 
      </div>
    <div className="nav-item ">
     <Link to="/contact" className="nav-text" > Contact Me </Link>
    </div>
         </div>
         </div>
<Switch>
          <Route exact path="/">
            <Home />
          </Route>
     
        </Switch>
     </Router>
    )

}