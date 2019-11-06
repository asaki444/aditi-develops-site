import React from 'react';
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
         <ul className="home-navigation-bar">
          <li className="nav-item">
          <Link to="/"> Home </Link> 
          </li>
          <li className="nav-item">
            <Link to="/about-me"> About Me </Link> 
          </li>
      <li className="nav-item">
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className="nav-item">
         <Link to="/community-involvement">Community</Link> 
      </li>
    <li className="nav-item ">
     <Link to="/contact"> Contact Me </Link>
    </li>
         </ul>
         </div>
<Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
     </Router>
    )

}