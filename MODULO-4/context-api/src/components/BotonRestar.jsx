import React from "react";

export default function BotonRestar({ cuenta, setCuenta }) {
  return <button onClick={()=> setCuenta(cuenta - 1)}>-</button>;
}
