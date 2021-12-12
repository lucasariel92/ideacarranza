import { Button, Card, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss"

export const Item = ({products}) => {
    return(
        <Grid item xs={12} sm={3} className="item">
            
                <Card variant="outlined" className="card">
                  <img src="https://via.placeholder.com/300" width="300px" alt={products.item}/>
                  <div className="cardText">
                    <p>{products.item}</p>
                    <p>${products.precio} x UN</p>
                    <Link to={`/detail/${products.id}`}>
                      <Button variant="contained"> Detalle </Button>
                    </Link>
                    
                  </div>
                </Card>
            
        </Grid>

    )
}

