import React from 'react';
import NavigationBar from './navigationBar/navigationBar';
import AboutMe from './aboutMe/aboutMe';
import Home from './home/home';
import Portfolio from './portfolio/portfolio';
import ContactMe from './contactMe/contactMe'; 
import Footer from './footer/footer';

import './App.css';

function App() {
  return (

    <div className="App">
       <NavigationBar />
       <Home/>  
       <AboutMe />  
       <ContactMe />
       <Footer />
    </div>


  );
}

export default App;
