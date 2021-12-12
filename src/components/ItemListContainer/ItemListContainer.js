

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemList } from "../ItemList/ItemList";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../Firebase/config";









export const ItemListContainer = () =>{

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    
    
    
    const {catId} = useParams()


    useEffect( ()=>{

        setLoading(true)

        // 1- armar referencia
        const productsRef = collection(db, 'products')
        // 2- GET a la referencia
        getDocs(productsRef)
        .then((response) =>{
            const items = response.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setProducts(items)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [catId])
    

    return(
        <section>
        
        
        
        {
            loading 
            ? <h2>Cargando...</h2>
            : <ItemList className="itemList" products={products}/>
        }
            
        
        </section>
        
    )

    
}



