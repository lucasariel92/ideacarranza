import { Grid } from "@mui/material";

import React from "react";
import { Item } from "../Item/Item";



export const ItemList = ({products}) => {
    return(
        <Grid container sx={{width:"100%"}}>
        {products.map( (products) => <Item products={products} key={products.cod}/>)}
        </Grid>
    )
}