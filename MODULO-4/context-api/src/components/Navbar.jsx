import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ContadorContext } from '../contexts/ContadorContext'
import { CartContext } from '../contexts/CartContext'
import { GlobalContext } from '../contexts/GlobalContext'

export default function Navbar() {
  const { totalCarrito } = useContext(CartContext)
  const { token, setToken } = useContext(GlobalContext)
  const navigate = useNavigate()
  const verCarrito = ()=>{
    if(token == false){
      alert("Debes iniciar sesión para acceder al carrito!")
      navigate("/login")
      return
    }else{
      navigate("/cart")
    }
  }
  return (
    <nav className='bg-dark text-white d-flex justify-content-center p-3 '>
        <h4>Logo APP</h4>
        <div className='ms-2 d-flex justify-content-center gap-2'>
            {/*PASO 3: LINK NOS SIRVE PARA QUE NUESTRA APP NO SE RECARGUE. TENEMOS QUE REMPLAZAR TODAS LAS ETIQUETAS <a> por <Link> */}
            <NavLink className={({isActive}) => (isActive == true ? "link-activo" : "link-inactivo")}  to="/home">Inicio</NavLink>

            {!token && <NavLink className={({isActive}) => (isActive == true ? "link-activo" : "link-inactivo")} to='/login'>Iniciar Sesión</NavLink>}

            {token && <NavLink onClick={()=>setToken(false)} className={({isActive}) => (isActive == true ? "link-activo" : "link-inactivo")} to='/login'>Cerrar Sesión</NavLink>}

            <button className='btn btn-light' onClick={()=>{verCarrito()}}> Total carrito: ${totalCarrito}</button>
        </div>
    </nav>
  )
}
