import { Fab, TextField } from "@mui/material";
import { useState } from "react";
import './ItemCount.scss'



const ItemCount = () => {
    const[quant, setQuant] = useState(0)


    const decreaseQuant = () =>{
        const newQuant = quant-1
        newQuant >= 0 ? setQuant(newQuant) : setQuant(0)
    }
    const addQuant = () =>{
        const newQuant = quant+1
        const availableStock = 20
        newQuant <= availableStock ? setQuant(newQuant) : setQuant(availableStock)
    }

    return(
        <div className="ItemListContainer">
                <Fab size="small" onClick={decreaseQuant}> - </Fab>
                
                <TextField 
                            value={quant} 
                            inputProps={{ style:  {textAlign: 'center'} }} 
                            style={{ width: '100px'}} 
                            />

                 <Fab size="small" onClick={addQuant} > + </Fab>
        </div>
        
    )
}
export default ItemCount