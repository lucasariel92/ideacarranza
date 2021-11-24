import { Button, Card, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss"

export const Item = ({products}) => {
    return(
        <Grid item xs={12} sm={4} className="item">
            
                <Card variant="outlined" className="card">
                  <img src="https://via.placeholder.com/300" width="300px" alt={products.ITEM}/>
                  <div className="cardText">
                    <p>{products.ITEM}</p>
                    <p>${products.PRECIO} x {products.UNIDAD_DE_MEDIDA}</p>
                    <Link to={`/detail/${products.COD}`}>
                      <Button variant="contained"> Agregar </Button>
                    </Link>
                    
                  </div>
                </Card>
            
        </Grid>

    )
}

