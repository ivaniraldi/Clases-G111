import Contador from "./components/Contador";
import Descripcion from "./components/Descripcion";
import Saludar from "./components/Saludar";

function App() {
  return (
    <>
      <h2>Estados en React</h2>
      <section>
        <Contador />
        <Contador />
        <Contador />
      </section>
      <Descripcion texto="Esto es un parrafo." numero={1} />
      <Saludar/>
    </>
  );
}

export default App;
