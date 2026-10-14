import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Cart() {
  const { cart, totalCarrito, sumarUno, restarUno } = useContext(CartContext);
  return (
    <div className="container my-3">
      <ul>
        {cart.length > 0 ? (
          cart.map((p, i) => {
            return (
              <li key={i} className="bg-light rounded mb-1">
                <img src={p.image} style={{ width: "40px" }} alt="" />
                {p.title} <button onClick={()=>restarUno(p.id)} className="btn border">-</button> {p.quantity}
                <button onClick={()=> sumarUno(p.id)} className="btn border me-3">+</button>|| ${p.price}
              </li>
            );
          })
        ) : (
          <p>Aún no hay productos en el carrito.</p>
        )}
      </ul>
      <div>
        <h5>Total de la compra: ${totalCarrito}</h5>
        <button className="btn btn-success">Comprar</button>
      </div>
    </div>
  );
}
