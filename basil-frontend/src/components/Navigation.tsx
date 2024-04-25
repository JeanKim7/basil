import {Link} from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

type NavigationProps ={
    isLoggedIn: boolean,
    logUserOut: () => void,
}

export default function Navigation({isLoggedIn, logUserOut}: NavigationProps) {
  return (
    <Navbar id='navbar'>
        <Container fluid>
            <Navbar.Brand href='/' className= "red">Basil</Navbar.Brand>
            <Nav>
                {isLoggedIn ? (
                  <>
                  <Nav.Link as={Link} to='/Home' className= "red">Home</Nav.Link>
                  <Nav.Link className= "red">My Recipes</Nav.Link>
                  <Nav.Link as ={Link} to='/createRecipe' className= "red">Create a New Recipe</Nav.Link>
                  <Nav.Link className= "red">Search Recipes</Nav.Link>
                  <Nav.Link as = {Link} onClick={()=>logUserOut()} to ='/login' className= "red">Log Out</Nav.Link>
                </>
                ):(
                  <>
                  <Nav.Link className= "red">About Us</Nav.Link>
                  <Nav.Link as={Link} to ='/signup' className= "red">Sign Up</Nav.Link>
                  <Nav.Link as = {Link} to ='/login' className= "red">Log In</Nav.Link>
                </>
                )}
            </Nav>
        </Container>
    </Navbar>
  )
}