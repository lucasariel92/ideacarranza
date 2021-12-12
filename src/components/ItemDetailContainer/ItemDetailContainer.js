import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { DetailContainer } from './DetailContainer'
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../Firebase/config";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()

    useEffect(() =>{
        setLoading(true)
        const docRef = doc(db, 'products', itemId)
        getDoc(docRef)
        .then((doc)=>{
            console.log(doc)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[itemId])
    
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
