import React from 'react' 
import { NavLink } from 'react-router-dom' 

import Nav from './Nav'

function Homepage() { 


    return ( 
        <>
        <div className="home">
          <div className="hero-content">
            <Nav />
          </div>
          <div className="landing-page-content">
            <div className="landing-page-text-content-container">
              <h3 className="landing-page-text-content-h3">Welcome To ShoeMoo</h3>
              <p className="landing-page-text-content-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="landing-page-second-content-container">
              <div className="landing-page-second-p-container">
                <p className="landing-page-second-content-container-p"></p>
                <p className="landing-page-second-content-container-p">Click here to get started</p>
              </div>
              <NavLink to="/signup">
                <button className="get-started btn">Get Started</button>
              </NavLink>
            </div>
          </div>
        </div>
      </>
    )
}

export default Homepage