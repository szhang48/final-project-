import React from 'react';
import { NavLink } from 'react-router-dom' 

function Nav() { 

    return( 
        <div className="nav"> 
            <div className="nav-item-container">

            </div>
            <h2 className="title-logo">ShoeMoo</h2>
            <div className="login-signup-container">
                <NavLink to="/login">
                    <nav className="login-signup">Login</nav>
                </NavLink>
            </div>
        </div>
    )
}

export default Nav 