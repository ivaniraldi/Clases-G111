import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()
  return (
    <div className='container d-flex justify-content-center flex-column align-items-center gap-2' style={{minHeight: "100vh"}}>
        <h2>Bienvenido a nuestra Web!</h2>
        <button onClick={()=> navigate("/home")} className='btn btn-dark'>Entrar</button>
    </div>
  )
}
