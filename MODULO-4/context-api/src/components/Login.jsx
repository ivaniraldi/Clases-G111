import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { token, setToken } = useContext(GlobalContext)

  const handleSubmit = (e)=>{
      e.preventDefault()

      if(!email.trim() || !password.trim() || password.length < 5 ){
        alert("Debes completar email y contraseña, la contraseña debe tener al menos 5 caracteres.")
        return
      }

      alert("Iniciaste sesión!")
      setEmail("")
      setPassword("")
      setToken(true)
      navigate("/home")
  }
 
  return (
    <div className='container'>
            <Form onSubmit={(e)=> handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
