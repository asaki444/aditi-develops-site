import React from 'react';
import './navigation.scss';
import AditiLogo from '../images/aditi-logo.png';
import {FaBars} from 'react-icons/fa';

import { NavLink} from 'react-router-dom';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
     toggleMobileNav: false
  }
}



render (){

   let showMobileNav = () => {
     this.setState({
        toggleMobileNav: !this.state.toggleMobileNav
    }) 
    }

    const activeStyle = {
      backgroundColor: '#96DADA'
    }
  
  return (
   
      <>

        <div className="image-container">
          <img src={AditiLogo}/>
        </div>
     
        <div className="mobile-navigation-bars"  onClick={showMobileNav}>
          <FaBars />
        </div>
        <div className={this.state.toggleMobileNav ? "home-navigation-bar show-nav-bar" : "home-navigation-bar" }>

          <NavLink activeStyle={activeStyle} to="/" className="nav-item">
            <div className="nav-text">
              Home
            </div>
          </NavLink>
          <NavLink activeStyle={activeStyle} className="nav-item" to="/about-me">
            <div  className="nav-text">
              About Me
            </div>
          </NavLink>
          <NavLink  activeStyle={activeStyle} className="nav-item" to="/portfolio">
            <div to="/portfolio" className="nav-text">Portfolio</div>
          </NavLink>
          <NavLink activeStyle={activeStyle} className="nav-item" to="/community-involvement">
            <div className="nav-text">Community</div>
          </NavLink>
          <NavLink  activeStyle={activeStyle} className="nav-item" to="/contact">
            <div className="nav-text">
              Contact Me
            </div> 
          </NavLink>
        </div>
       
      </>

  )
  }

}