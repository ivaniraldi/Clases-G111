import { createContext, useState } from "react";

// Paso 1: Creamos el contexto con el createContext dandole el nombre que queramos
export const ContadorContext = createContext()

const ContadorProvider = ({children})=>{
//Paso 2: Aqui va TODA la información que quiero compartir de forma "global"
    let nombre = "Ivan"

    const [cuenta, setCuenta] = useState(0)

    function test(){
        console.log("Función desde el componente!")
        return
    }

    return(
        // Paso 3: en value, pasaremos todos los valores que queremos compartir, dentro de un objeto.
        <ContadorContext.Provider value={{nombre, cuenta, setCuenta, test}}>
            { children }
        </ContadorContext.Provider>
    )
}

export default ContadorProvider