import { createContext, useState } from "react";

export const CartContext = createContext()


const CartProvider = ({children})=> {
    const [cart, setCart] = useState([])
    let cartLenght = cart.length

    const totalCarrito = cart.reduce((acc, producto)=>{
        return acc + producto.price * producto.quantity
    }, 0).toLocaleString()
    
    const agregarCarrito = (producto) =>{
        setCart([...cart, producto])
    }

    const restarUno = (id)=>{
        setCart(cart.map((p)=>{
            if(p.id == id){
                return {
                    ...p,
                    quantity: p.quantity-1
                }
            }
            return p
        }))
    }
      const sumarUno = (id)=>{
        setCart(cart.map((p)=>{
            if(p.id == id){
                return {
                    ...p,
                    quantity: p.quantity+1
                }
            }
            return p
        }))
    }
    
    return(
        <CartContext.Provider value={{cart, cartLenght, agregarCarrito, totalCarrito, sumarUno, restarUno}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider