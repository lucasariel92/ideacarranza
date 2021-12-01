import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { askItem } from '../ItemListContainer/helpers/askItem'
import { DetailContainer } from './DetailContainer'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)
    const {itemCOD} = useParams()
    

    useEffect(() =>{
        setLoading(true)
        askItem()
            .then (response => {
                setItem ( response.find (products => products.COD === itemCOD) )
                
                
                
            })
            .finally(() => {
                setLoading(false)
            })

    

    },[])
    
    return (
        <div>
            {
                loading 
                ? <h2>cargando</h2>
                : <DetailContainer {...item}/>
            }
            
        </div>
    )
}
