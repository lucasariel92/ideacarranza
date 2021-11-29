import { Button, Link } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import {ItemCount} from "../ItemListContainer/ItemCount"


export const DetailContainer = ({ITEM, IMAGEN, PRECIO, UNIDAD_DE_MEDIDA}) => {
    
    const[quant, setQuant] = useState(0)
    const[add, setAdd] = useState(false)

    const navigate = useNavigate()

    const handleBack = () => {
        navigate (`/`)
    }
    
    const addToCart = () =>{
        if (quant >0 ){
        console.log("item agregado", {
            ITEM,
            PRECIO,
            UNIDAD_DE_MEDIDA,
            quant
        })
        setAdd(true)
    }
    }


    return (
        <div>
            <img src={IMAGEN} alt=""></img>
            <p>{ITEM}</p>
            <p>${PRECIO} x {UNIDAD_DE_MEDIDA}</p>
            <Button variant="contained" onClick={handleBack}>Volver</Button>
            {
                !add
                ?   <ItemCount 
                        initial={0} 
                        maxStock={20} 
                        quant={quant} 
                        setQuant={setQuant}
                        onAdd={addToCart}
                    />
                :  <Link to = "/cart">
                    <Button variant="contained">Terminar mi compra</Button>
                   </Link>
            }
            
        </div>
    )
}
