import React, { useContext, useEffect, useState } from "react";
import { ContadorContext } from "../contexts/ContadorContext";
import { CartContext } from "../contexts/CartContext";

export default function Galeria() {
  const [productos, setProductos] = useState([]);
  const { agregarCarrito } = useContext(CartContext)
 
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProductos(data.products);
    };

    getProducts();
  }, []);

  return (
    <div className="container my-3 ">
      <div className="row gap-3 d-flex justify-content-center">
        {productos.length > 0
          ? productos.map((p) => {
              return (
                <div key={p.id} className="col-3 bg-light border rounded d-flex flex-column justify-content-between align-items-center">
                  <img style={{ width: "200px" }} src={p.images[0]} alt="" />
                  <h5>{p.title}</h5>
                  <h3 className="text-success">${p.price}</h3>
                  <button onClick={()=> agregarCarrito({
                    id: p.id,
                    price: p.price,
                    title: p.title, 
                    image: p.images[0],
                    quantity: 1
                  })} className="btn btn-dark my-3">Agregar al carrito</button>
                </div>
              );
            })
          : "Cargando productos..."}
      </div>
    </div>
  );
}
