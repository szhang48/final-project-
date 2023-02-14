import React, { useEffect, useState } from 'react'

function Profile(props) {

    const [user, setUser]= useState({});

    useEffect(()=> {
        let User= localStorage.getItem("User");
     
        console.log("services", User)
         
        if(!User){
         props.history.push("/login")
        }
        else{
            User= JSON.parse(User)
            setUser(User);
        }
     }, [])


  return (
    <div className="profile">
        <h1>Welcome <i>{user.username}</i> </h1>
        <p><strong>Age</strong>: {user.age}</p>
        <p><strong>City</strong>: {user.city}</p>
        <p><strong>Bio</strong>: {user.bio}</p>
    </div>
  )
}

export default Profile
