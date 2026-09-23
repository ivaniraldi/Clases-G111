import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import TodoList from "./components/TodoList";

function App() {
  const [productos, setProductos] = useState([
    "Producto 1",
    "Producto 3",
    "Producto 3",
    "Producto 4",
  ]);

  return (
    <>
      {/*<ul className="border p-3 my-3">
        {productos.map((producto, indice) => {
          return (
            <li className="" key={indice}>
              {" "}
              {producto}{" "}
            </li>
          );
        })}
      </ul>*/}

      {/* <ProductList /> */}

      <TodoList />
    </>
  );
}

export default App;
