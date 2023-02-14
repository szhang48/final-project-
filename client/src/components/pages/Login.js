import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
// import { useNavigation } from 'react-router-dom';

import "./Login.css"

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [popupStyle, showPopup] = useState('hide');
  const [message, setMessage] = useState('');

  // const navigate= useNavigation();

  const {setUser}= useContext(UserContext);

  const popup = async () => { 
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      });
      const data = await res.json();
      if(data.id){
      setUser(data)
      localStorage.setItem("User", JSON.stringify(data));
      console.log("signup response", data);
      setMessage("Login is successful");
    props.history.push("/profile")
      }
      else{
        setMessage("Login failed");
        return
      }
    } catch (e) {
      setMessage("Login failed")
    }
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }



  return(
   <div className="page">
   <div className="cover">
      <h1>Login</h1>
      <input onChange={(e)=> setUsername(e.target.value)} type="text" placeholder='username' /> 
      <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='password' />

      <div className='login-btn' onClick={popup}>Login</div>
      <p className='text'><Link to='/sign-up'>  SIGN UP </Link> </p>
      <div className='alt-login'>
        <div className='facebook'></div>
        <div className='google'></div>
      </div>
      
      <div className={popupStyle}>
        {/* <h3>Login Failed</h3> */}
        <p>{message}</p>
      </div>
    </div>
    </div>
  

    )
}

export default Login
