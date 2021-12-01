import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer"
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { CartView } from "./components/CartView/CartView";
import { CartProvider } from "./components/CartContext/CartContext";






function App() {

  const theme = createTheme({
    palette :{
      primary: red
    }
  })



  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
          <NavBar/>

          <Routes>
              <Route path="/" element = { <ItemListContainer /> }/>
              <Route path="/products/:catId" element = { <ItemListContainer /> } />
              <Route path="/detail/:itemCOD" element = {<ItemDetailContainer />} />
              <Route path ="/detail" element = { <ItemDetailContainer /> } />
              <Route path="/cart" element= {<CartView/>}/>
          </Routes>      
        </BrowserRouter>  
    </ThemeProvider>

    </CartProvider>
    
      
    
  )
}

export default App;
