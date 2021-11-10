import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget'


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolBar">
         <ul>
             <li>HOME</li>
             <li>JARDIN</li>
             <li>OBRA</li>
             <li>ASP</li>
             <li>NOSOTROS</li>
         </ul>
         <CartWidget/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
