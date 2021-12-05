import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([])
    
  
    const addToCart = (products) =>{
      setCart([...cart, products])
      
    }
  
    const removeFromCart = (id) => {
      setCart (cart.filter( products => products.COD !== id ))
    }
  
    const emptyCart = () => {
      setCart([])
    }
  
    const isInCart = (id) => {
      return cart.some( products => products.COD === id )
    }
  
    const totalQuant = () =>{
      return cart.reduce ((acc, products) => acc + products.quant, 0)
    }

    const totalBought = () => {
        return cart.reduce ((acc, products) => acc + products.PRECIO * products.quant, 0)
    }

    return(
        <CartContext.Provider value ={{
            addToCart,
            removeFromCart,
            emptyCart,
            isInCart,
            totalQuant,
            totalBought,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )

}