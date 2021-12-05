import { Button} from '@mui/material'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import {ItemCount} from "../ItemListContainer/ItemCount"


export const DetailContainer = ({ITEM, IMAGEN, PRECIO, UNIDAD_DE_MEDIDA, COD}) => {
    
    const {addToCart, isInCart} = useContext(CartContext)
    
    const[quant, setQuant] = useState(0)
    

    const navigate = useNavigate()

    const handleBack = () => {
        navigate (`/`)
    }
    
    const handleAddToCart = () =>{
        if (quant > 0 ){
        addToCart({
            COD,
            ITEM,
            PRECIO,
            UNIDAD_DE_MEDIDA,
            quant,
            IMAGEN
        })
        
    }
    }


    return (
        <div>
            <img src={IMAGEN} alt=""></img>
            <p>{ITEM}</p>
            <p>${PRECIO} x {UNIDAD_DE_MEDIDA}</p>
            <Button variant="contained" onClick={handleBack}>Volver</Button>
            {
                !isInCart(COD)
                ?   <ItemCount 
                        initial={0} 
                        maxStock={20} 
                        quant={quant} 
                        setQuant={setQuant}
                        onAdd={handleAddToCart}
                    />
                :  <Link to = "/cart">
                    <Button variant="contained">Terminar mi compra</Button>
                   </Link>
            }
            
        </div>
    )
}
