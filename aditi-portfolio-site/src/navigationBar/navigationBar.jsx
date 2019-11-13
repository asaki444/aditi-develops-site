import React from 'react';
import './navigation.scss';
import AditiLogo from '../images/aditi-logo.png';
import {FaBars} from 'react-icons/fa';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';

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

    const active = {
      backgroundColor: '#96DADA'
    }
  
  return (
   
      <>

        <div className="image-container">
          <img src={AditiLogo}/>
        </div>
     <Router>
  
        <div className="mobile-navigation-bars"  onClick={showMobileNav}>
          <FaBars />
        </div>
        <div className={this.state.toggleMobileNav ? "home-navigation-bar show-nav-bar" : "home-navigation-bar" }>
    
          <NavLink activeClassName="active" className="nav-item" to="/#home-page">
            <div className="nav-text">
              Home
            </div>
          </NavLink>
          <NavLink activeClassName="active" className="nav-item" to="/#about-me-container">
            <div className="nav-text">
              About Me
            </div>
          </NavLink>
          <NavLink  activeClassName="active"  className="nav-item" to="/#portfolio-page">
            <div className="nav-text">Portfolio</div>
          </NavLink>
          <NavLink activeClassName="active" className="nav-item" to="/#contact-form-section">
            <div className="nav-text">
              Contact Me
            </div> 
          </NavLink>
        </div>
          
     </Router>
      </>

  )
  }

}