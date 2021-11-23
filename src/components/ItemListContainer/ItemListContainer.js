

import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { askData } from "./helpers/askData";







export const ItemListContainer = () =>{
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    
    useEffect( ()=>{

        setLoading(true)
        askData()
            .then( (response) => {
                setProducts(response)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally( () => {
                setLoading(false)
                
            })
    }, [])
    

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



