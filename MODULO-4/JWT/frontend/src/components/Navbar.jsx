import { Link } from 'react-router-dom'

export default function Navbar() {
    const logout = ()=>{
        //eliminar el usuario desde context en caso de estar en un estado global
        localStorage.clear()
    }
  return (
    <nav className='bg-dark text-white d-flex justify-content-center p-2 '>
        <h2>JWT</h2>
        <div className=' ms-2 d-flex gap-2'>
            <Link to={"/"}> Inicio</Link>
            <Link to={"/login"}> Iniciar Sesión</Link>
            <Link to={"/register"}> Registrarme</Link>
            <Link to={"/profile"}> Perfil</Link>
            <button onClick={()=>logout()} className='btn btn-sm btn-danger'>Cerrar Sesión</button>
        </div>
    </nav>
  )
}
