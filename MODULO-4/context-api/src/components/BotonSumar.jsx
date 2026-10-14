import React from 'react'

export default function BotonSumar(props) {
  return (
    <button onClick={()=> props.setCuenta(props.cuenta + 1)}>+</button>
  )
}
