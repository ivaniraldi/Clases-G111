import { Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import LoginView from "./views/LoginView"
import Landing from "./views/Landing"
import Navbar from "./components/Navbar"
import NotFound from "./views/NotFound"
import CartView from "./views/CartView"

function App() {
  return (
    <>
    {/* PASO 2: ROUTES ES  EL CONTENEDOR DE NUESTRAS RUTAS. */}
  
    <Routes>
      {/* ROUTE SON LAS RUTAS(PAGINAS) DE NUESTRA APP, EN PATH LE PASAMOS LA URL Y ELEMENT LE PASAMOS EL COMPONENTE VISTA */ }
      <Route path="/" element={<Landing/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<LoginView/>} />
      <Route path="/cart" element={<CartView/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App
