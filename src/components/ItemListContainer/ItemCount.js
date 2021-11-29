import { Button, Fab, TextField } from "@mui/material";
import { Box } from "@mui/system";

import './ItemCount.scss'



export const ItemCount = ({initial, maxStock, setQuant, quant, onAdd}) => {
    

    const decreaseQuant = () =>{
        const newQuant = quant-1
        newQuant >= 0 ? setQuant(newQuant) : setQuant(initial)
    }
    const addQuant = () =>{
        const newQuant = quant+1
        newQuant <= maxStock ? setQuant(newQuant) : setQuant(maxStock)
    }



    return(
        <Box className="itemCount">
            <Box className="itemCount__quant">

                <Fab size="small" onClick={decreaseQuant}> - </Fab>
                <TextField 
                    value={quant} 
                    inputProps={{ style:  {textAlign: 'center'} }} 
                    style={{ width: '50px'}} 
                />
                <Fab size="small" onClick={addQuant}> + </Fab>

                </Box>
                <Button variant="contained" onClick={onAdd}>Agregar</Button>
        </Box>
        
    )
}
