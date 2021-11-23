import { Card, Grid } from "@mui/material";
import { Box, grid } from "@mui/system";
import React from "react";
import "./Item.scss"

export const Item = ({products}) => {
    return(
        <Grid item xs={12} sm={3} className="item">
            
                <Card variant="outlined" className="card">
                  <img src="https://via.placeholder.com/300" width="300px"/>
                  <div className="cardText">
                    <h3>{products.ITEM}</h3>
                    <p>${products.PRECIO} x {products.UNIDAD_DE_MEDIDA}</p>
                    <p></p>
                  </div>
                </Card>
            
        </Grid>

    )
}

