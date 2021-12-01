import React, { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'

export const CartView = () => {
const {cart} = useContext(CartContext)

    return (
        <div>
            {
                cart.map ((products) => (
                    <div>
                        <p>{products.ITEM}</p>
                        <p>{products.PRECIO}</p>
                        <p>{products.quant}</p>
                    </div>
                ))
            }
        </div>
    )
}
