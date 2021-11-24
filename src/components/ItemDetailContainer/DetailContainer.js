import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

export const DetailContainer = ({ITEM, IMAGEN, PRECIO, UNIDAD_DE_MEDIDA}) => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate (`/`)
    }
    
    return (
        <div>
            <img src={IMAGEN} alt=""></img>
            <p>{ITEM}</p>
            <p>${PRECIO} x {UNIDAD_DE_MEDIDA}</p>
            <Button variant="contained" onClick={handleBack}>Volver</Button>
        </div>
    )
}
