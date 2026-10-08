import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100 gap-2'>
        <h2>Bienvenido a nuestra Web!</h2>
        <Link to="/home">
        <button className='btn btn-dark'>Entrar</button>
        </Link>
    </div>
  )
}
