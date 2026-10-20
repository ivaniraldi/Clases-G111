import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function DetailView() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        const getProduct = async()=>{
            const res = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await res.json()
            setProduct(data)
        }
        getProduct()
    },[id])
  return (
    <>
        <Navbar/>
        <div className="container my-3">
            {product != null ? 
            <div>
                <h4>{product.title}</h4>
                <img src={product.images[0]} style={{width:"200px"}} alt="" />
                <p>{product.description}</p>
                <h3>${product.price}</h3>

                <button className="btn btn-dark">Comprar</button>

            </div>
            
            : "Cargando producto..."}
        </div>
        <Footer/>
    </>
  )
}
