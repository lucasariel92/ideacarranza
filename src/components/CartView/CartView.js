import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'

export const CartView = () => {
const {cart, removeFromCart, emptyCart, totalBought} = useContext(CartContext)



    if (cart.length === 0 ){
        return(
            <h2>No hay productos en el carrito</h2>
        )

    }
    return(
                <div>
                    {
                        cart.map ((products) => (
                            <article key={products.COD}>
                                <img src={products.IMAGEN} width="100px"/>
                                <p>Item: {products.ITEM}</p>
                                <p>Precio: ${products.PRECIO}</p>
                                <p>Cantidad: {products.quant}</p>
                                <Button variant="contained" onClick={()=>removeFromCart(products.COD)}>Eliminar</Button>
                            </article>
                        ))
                    }
                    <hr/>
                    <div>
                        <Button variant="contained" onClick={emptyCart}>Vaciar</Button>
                        <Button variant="contained">Terminar mi compra</Button>
                        <p>Total comprado: {totalBought()}</p>
                    </div>
                </div>
        
    )


  

}
