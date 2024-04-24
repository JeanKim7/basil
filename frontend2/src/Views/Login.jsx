import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'



export default function Login () {
    const navigate =useNavigate()   
    const [seePassword, setSeePassword] = useState(false)
    
    const [userFormData, setUserFormData] = useState(
        {
            email: '',
            password: '',
        }
    )

    const handleInputChange = (e) => {
        setUserFormData({...userFormData, [e.target.name]: e.target.value})
    }


    const handleFormSubmit = () => navigate('/')

    return (
        <>
        <h1 className='text-center'>Login</h1>
        <Card>
        <Card.Body>
            <Form onSubmit={handleFormSubmit}>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control id='email' name= 'email' placeholder='Enter email' value = {userFormData.email} onChange = {handleInputChange}/>

                <Form.Label htmlFor="password">Password</Form.Label>
                    <InputGroup>
                        <Form.Control id='password' name= 'password' placeholder='Enter password' type={!seePassword? 'password': 'text'} value = {userFormData.password} onChange = {handleInputChange}/>
                        <InputGroup.Text onClick = {() => setSeePassword(!seePassword)}>{seePassword?"Hide" :"Show"}</InputGroup.Text>
                    </InputGroup>
                
                <Button type ="submit" variant='success'>Log In</Button>
                </Form>
        </Card.Body>
        </Card>

        </>
  )
}