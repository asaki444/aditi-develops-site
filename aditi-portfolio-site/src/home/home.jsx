import React from 'react';
import './home.scss';
import Portfolio from '../portfolio/portfolio';



export default function Home (){


    return(

        <div id="home-page">
            <div className="welcome-container">
                <div className="welcome-text">
                Happy to e-meet you, my name is Aditi, a community focused software engineer New York City!
                </div>
                <Portfolio/>
            </div>
        </div>
        )
}