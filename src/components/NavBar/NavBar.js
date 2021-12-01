import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolBar">
         <ul>
             <li><Link to ="/">HOME</Link></li>
             <li><Link to ="/detail">JARDIN</Link></li>
             <li><Link to ="/products/MACHIMBRE">MACHIMBRE</Link></li>
             <li>ASP</li>
             <li>NOSOTROS</li>
         </ul>
         <Link to="cart"><CartWidget/></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
