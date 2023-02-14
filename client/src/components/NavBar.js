import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import { Button } from './Button';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true) 
  // const {user}= useContext(UserContext);

  // console.log(user);

  const [user, setUser]= useState(null);

  useEffect(()=> {
      let User= localStorage.getItem("User");
       
     if(User){
          User= JSON.parse(User)
          setUser(User);
     }
     else{
      setUser(null)
     }
   }, [])

  const handleClick = () => setClick(!click); 
  const closeMobileMenu = () => setClick(false);
  
  const showButton = () => { 
    if(window.innerWidth <= 960) { 
      setButton(false)
    } else { 
      setButton(true)
    }
  };


  useEffect(() => { 
    showButton();
  }, []);

  window.addEventListener('resize', showButton); 

  const logOut=()=> {
    localStorage.removeItem("User")
  }


  return (
   <>
     <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            ShoeMoo <i className='fab fa-typo3'/>  
          </Link>
          <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services 
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products 
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                Profile 
              </Link>
            </li>
            {!user && (
            <li className='nav-item'>
              <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
          ) }
           {user && (
            <li className='nav-item' >
              <Link to='/login' className='nav-links-mobile' onClick={()=> {closeMobileMenu(); logOut()}}>
                Logout
              </Link>
            </li>
            ) }
          </ul>
          {button && !user && <Button buttonStyle='btn--outline'>Login</Button>}
          {button && user && <Button buttonStyle='btn--outline' onClick={logOut}>Logout</Button>}
          </div>
        </div>
     </nav>
   </>
  )
}

export default NavBar
