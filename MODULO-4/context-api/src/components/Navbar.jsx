import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContadorContext } from '../contexts/ContadorContext'
import { CartContext } from '../contexts/CartContext'

export default function Navbar() {
  const { totalCarrito } = useContext(CartContext)
  return (
    <nav className='bg-dark text-white d-flex justify-content-center p-3 '>
        <h4>Logo APP</h4>
        <div className='ms-2 d-flex justify-content-center gap-2'>
            {/*PASO 3: LINK NOS SIRVE PARA QUE NUESTRA APP NO SE RECARGUE. TENEMOS QUE REMPLAZAR TODAS LAS ETIQUETAS <a> por <Link> */}
            <Link to="/home">Inicio</Link>
            <Link to='/login'>Iniciar Sesión</Link>
            <Link to='/cart' className='btn btn-light'> Total carrito: ${totalCarrito}</Link>
        </div>
    </nav>
  )
}
