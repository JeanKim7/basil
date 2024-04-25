import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';


import Container from 'react-bootstrap/Container';

import Navigation from './components/Navigation';
import SignUp from './views/SignUp';
import Login from './views/Login'
import Home from './views/Home'
import CreateRecipe from './views/CreateRecipe';

import { getMe } from './lib/apiWrapper'
import { UserType } from './types';

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') && new Date(localStorage.getItem('tokenExp')||0) > new Date() ? true : false);
  const [loggedInUser, setLoggedInUser] = useState<UserType|null>(null)

  useEffect(() => {
    console.log('This is running')
    async function getLoggedInUser(){
        if (isLoggedIn){
            const token = localStorage.getItem('token') || ''
            const response = await getMe(token);
            if (response.data){
                setLoggedInUser(response.data);
                localStorage.setItem('currentUser', JSON.stringify(response.data));
            } else {
                setIsLoggedIn(false);
                console.error(response.data);
            }
        }
    }

    getLoggedInUser()
}, [isLoggedIn])
  
  const logUserIn = () => {
  setIsLoggedIn(true)
}

  const logUserOut = () => {
    setIsLoggedIn(false);
    setLoggedInUser(null);
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExp')
    localStorage.removeItem('currentUser');
    console.log('You have been logged out', 'dark')
}
  

  return (
    <>
    <Navigation isLoggedIn={isLoggedIn} logUserOut={logUserOut}/>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path ='/signup' element={<SignUp />} />
          <Route path = 'login' element = {<Login logUserIn = {logUserIn}/>} />
          <Route path = '/createRecipe' element = {<CreateRecipe/>} />
        </Routes>
      </Container>
   </>)
}