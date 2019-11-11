import React from 'react';
import NavigationBar from './navigationBar/navigationBar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import AboutMe from './aboutMe/aboutMe';
import Home from './home/home';
import Portfolio from './portfolio/portfolio';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
       <NavigationBar />
       <Route exact path="/" component={Home}/>  
       <Route exact path="/about-me" component={AboutMe}/>  
       <Route exact path="/portfolio" component={Portfolio} />
    </div>
    </Router>

  );
}

export default App;
