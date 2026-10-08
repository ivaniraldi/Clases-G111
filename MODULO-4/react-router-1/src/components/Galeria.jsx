import React, { useEffect, useState } from 'react'

export default function Galeria() {
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        const getProducts = async ()=>{
            const res = await fetch("https://dummyjson.com/products")
            const data= await res.json()
            setProductos(data.products)
        }

        getProducts()
    },[])

  return (
    <div className='container my-3'>
        <div className="row">
            {productos.length > 0 ? productos.map((p)=>{
                return(
                    <div className='col-4'>
                        <img style={{width: "200px"}} src={p.images[0]} alt="" />
                        <h5>{p.title}</h5>
                        </div>
                )
            }) : "Cargando productos..."}
        </div>
    </div>
  )
}
