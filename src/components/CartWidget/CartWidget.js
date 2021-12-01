import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

export default function CartWidget(){
    const {totalQuant} = useContext(CartContext)
    return(
        <>
        <ShoppingCartIcon/>
        <span> {totalQuant()} </span>
        </>
    )
}