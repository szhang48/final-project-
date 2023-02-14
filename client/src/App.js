import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import UserProvider from './context/UserContext';
import Profile from './components/pages/Profile';


function App() {
  


  return (
    <>
    <UserProvider>
     <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path="/profile" component={Profile}/>
          <Route path='/login' component={Login} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </UserProvider>
   
    </>
  );
}

export default App;
