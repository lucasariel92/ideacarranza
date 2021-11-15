

import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { askData } from "./helpers/askData";
import ItemCount from "./ItemCount";






const ItemListContainer = () =>{
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
        <>
        <ItemCount initial={0} maxStock={20}/>
        
        
        {
            loading 
            ? <h2>Cargando...</h2>
            : <ItemList products={products}/>
        }
            
        
        </>
        
    )

    
}



export default ItemListContainer;