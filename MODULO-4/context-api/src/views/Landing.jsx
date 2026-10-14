import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className='container d-flex justify-content-center flex-column align-items-center gap-2' style={{minHeight: "100vh"}}>
        <h2>Bienvenido a nuestra Web!</h2>
        <Link to="/home">
        <button className='btn btn-dark'>Entrar</button>
        </Link>
    </div>
  )
}
