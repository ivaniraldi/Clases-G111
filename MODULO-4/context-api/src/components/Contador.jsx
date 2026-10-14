import React, { useContext, useState } from 'react'
import BotonSumar from './BotonSumar'
import BotonRestar from './BotonRestar'
import { ContadorContext } from '../contexts/ContadorContext'

export default function Contador() {
   const {cuenta, setCuenta} = useContext(ContadorContext)
  return (
    <div>
        
    <p>La cuenta es: {cuenta}</p>
    <BotonRestar cuenta={cuenta} setCuenta={setCuenta}/>
    <BotonSumar cuenta={cuenta} setCuenta={setCuenta}/>
    </div>
  )
}
