import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h3>Ups! Parece que la página que intentas visitar no existe :(</h3>
        <h2>Prueba volviendo al inicio</h2>
        <Link to="/home">Volver</Link>
    </div>
  )
}
