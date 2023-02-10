import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

function SignUp() {
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
      setMessage("Username or password incorrect");
    }

    showPopup("login-popup")
      setTimeout(() => showPopup("hide"), 3000)
  }



  return(
   <div className="page">
   <div className="cover">
      <h1>SignUp</h1>
      <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} /> 
      <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>

      <div className='login-btn' onClick={popup}>Sign Up</div>      
      <p className='text'><Link to='/login'>  Login </Link> </p>
      <div className='alt-login'>
        <div className='facebook'></div>
        <div className='google'></div>
      </div>
      
      <div className={popupStyle}>
        <h3>Login</h3>
        <p>{message}</p>
      </div>
    </div>
    </div>
  

    )
} 

export default SignUp;