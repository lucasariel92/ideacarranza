import React from "react";
import { Item } from "../Item/Item";



export const ItemList = ({products}) => {
    return(
        <div>
        {products.map( (products) => <Item products={products}/>)}
        </div>



    )
}