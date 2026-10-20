import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import LoginView from "./views/LoginView"
import Landing from "./views/Landing"
import Navbar from "./components/Navbar"
import NotFound from "./views/NotFound"
import CartView from "./views/CartView"
import DetailView from "./views/DetailView"
import { useContext } from "react"
import { GlobalContext } from "./contexts/GlobalContext"

function App() {
  const { token } = useContext(GlobalContext)
  return (
    <>
    {/* PASO 2: ROUTES ES  EL CONTENEDOR DE NUESTRAS RUTAS. */}
  
    <Routes>
      {/* ROUTE SON LAS RUTAS(PAGINAS) DE NUESTRA APP, EN PATH LE PASAMOS LA URL Y ELEMENT LE PASAMOS EL COMPONENTE VISTA */ }
      <Route path="/" element={<Landing/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={token == true? <Navigate to="/home"/> : <LoginView/>} />
      <Route path="/cart" element={token == true ? <CartView/> : <Navigate to="/login"/>} />
      <Route path="/detalle/:id" element={<DetailView/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App
