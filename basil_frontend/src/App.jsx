import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';


import Container from 'react-bootstrap/Container';

import Navigation from './Components/Navigation';
import SignUp from './Views/SignUp';
import Login from './Views/Login'
import Home from './Views/Home'
import CreateRecipe from './Views/CreateRecipe';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true: false)

  const logUserIn=()=>{
    setIsLoggedIn(true)
  }

  const logUserOut = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('token')
    console.log("You have been logged out")
  }
  

  return (
    <>
    <Navigation isLoggedIn={isLoggedIn} logUserOut={logUserOut}/>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path ='/signup' element={<SignUp />} />
          <Route path = 'login' element = {<Login />} />
          <Route path = '/createRecipe' element = {<CreateRecipe/>} />
        </Routes>
      </Container>
   </>)
}