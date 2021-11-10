
import { Clicker } from "./components/Clicker/Clicker";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
      <Clicker/>
    </div>
  );
}

export default App;
