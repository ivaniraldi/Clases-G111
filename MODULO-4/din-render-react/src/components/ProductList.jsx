import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [productList, setProductList] = useState([
    {
      id: 1,
      title: "Laptop",
      price: 500,
      image:
        "https://images.pexels.com/photos/6452/laptop-notebook-technology-white-6452.jpg",
    },
    {
      id: 2,
      title: "Teclado",
      price: 200,
      image:
        "https://images.pexels.com/photos/12379676/pexels-photo-12379676.jpeg",
    },
    {
      id: 3,
      title: "Mouse",
      price: 100,
      image:
        "https://images.pexels.com/photos/4476638/pexels-photo-4476638.jpeg",
    },
  ]);
  return (
    <section className="row gap-3">
        {productList.map((producto)=>{
            return(
                <ProductCard key={producto.id} title={producto.title} price={producto.price} image={producto.image}/>
            )
        })}
    </section>
  );
}
