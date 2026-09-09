import { useState } from "react";

export default function Saludar() {
    const [nombre, setNombre] = useState("")
    const [color, setColor] = useState("")

    function cambiarColor(){
        const body = document.querySelector("body")
        body.style.backgroundColor = color
    }
  return (
    <div>
        <input type="text" value={nombre} onChange={ (event)=>{ setNombre(event.target.value) } }/>
        <button onClick={()=>{ alert("Hola "+ nombre) }}>Saludame!</button>
        <p>El valor ingresado es: {nombre}</p>

        <br />
        <input type="color" name="color" id="" onChange={(e)=>{setColor(e.target.value)}}/>
        <button onClick={()=>{cambiarColor()}}>Cambiar color de fondo</button>
    </div>
  );
}
