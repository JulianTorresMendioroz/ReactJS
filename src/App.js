import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<> 

    <NavBar /> 
    <ItemListContainer greeting='Hola, soy una prop de ItemListContainer' /> 
    <ItemCount stock='5' initial='1'/>
    
</>
  );
}

export default App;
