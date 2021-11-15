import { Fab, TextField } from "@mui/material";
import { useState } from "react";
import './ItemCount.scss'



const ItemCount = ({initial, maxStock}) => {
    const[quant, setQuant] = useState(initial)
    console.log(maxStock)
    
    


    const decreaseQuant = () =>{
        const newQuant = quant-1
        newQuant >= 0 ? setQuant(newQuant) : setQuant(initial)
        console.log(initial)
        
    }
    const addQuant = () =>{
        const newQuant = quant+1
        
        newQuant <= maxStock ? setQuant(newQuant) : setQuant(maxStock)
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