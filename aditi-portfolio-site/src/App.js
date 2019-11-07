import React from 'react';
import logo from './logo.svg';
import NavigationBar from './navigationBar/navigationBar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import AboutMe from './aboutMe/aboutMe';
import Home from './home/home'

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
       <NavigationBar />
       <Route exact path="/" component={Home}/>  
       <Route exact path="/about-me" component={AboutMe}/>  
    </div>
    </Router>

  );
}

export default App;
