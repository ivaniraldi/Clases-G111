import Titulo from "./components/Titulo";
import Sidebar from "./components/Sidebar";
import Producto from "./components/Producto";

function App() {
  return (
    <>
      <Titulo titulo="Hola Mundo" />

      <Sidebar />
      <Producto activo={true} nombre="Laptop LG" precio={150000} desc="Es una laptop con 64 GB de RAM"/>
      <Producto activo={false} nombre="Mouse Hitachi" precio={75000} desc="Mouse con DPi de 1600"/>
      <Producto activo={true} nombre="Teclado Razer" precio={85000} desc="Teclado mecánico con luces RGB"/>
    </>
  );
}

export default App;
