import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import "./Login.css"

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [popupStyle, showPopup] = useState('hide');
  const [message, setMessage] = useState('');
  
  const popup = async () => { 
    try {
      const res = await fetch("/users", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      });
      const data = await res.json();
      console.log("signup response", data);
      setMessage("Signup is successful");
    } catch (e) {

    }
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }



  return(
   <div className="page">
   <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder='username' /> 
      <input type="password" placeholder='password' />

      <div className='login-btn' onClick={popup}>Login</div>
      <p className='text'><Link to='/sign-up'>  SIGN UP </Link> </p>
      <div className='alt-login'>
        <div className='facebook'></div>
        <div className='google'></div>
      </div>
      
      <div className={popupStyle}>
        <h3>Login Failed</h3>
        <p>Username or password incorrect</p>
      </div>
    </div>
    </div>
  

    )
}

export default Login
