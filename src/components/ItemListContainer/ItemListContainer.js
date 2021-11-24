

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemList } from "../ItemList/ItemList";
import { askData } from "./helpers/askData";







export const ItemListContainer = () =>{

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    
    const {catId} = useParams()

    useEffect( ()=>{

        setLoading(true)
        askData()
            .then( (response) => {
                if (!catId){
                setProducts(response)
                } else{
                    setProducts(response.filter (products => products.PADRON === catId))
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally( () => {
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



