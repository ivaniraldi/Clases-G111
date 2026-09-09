import { useState } from "react";

function Contador(){
    const [cuenta, setCuenta] = useState(0)


    return(
        <>
        <button onClick={ ()=>{setCuenta(cuenta + 1)} }>Cuenta = {cuenta}</button>
        
        </>
    )
}

export default Contador