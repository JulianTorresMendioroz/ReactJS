import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import Item from './components/Item'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const onAddCart = (quantity) => {

    console.log(`Compraste ${quantity} productos`)
      
  }

  return (
<> 

    <NavBar /> 
    <ItemListContainer greeting='Hola, soy una prop de ItemListContainer' /> 
    <Item />
     {/* <ItemCount stock={5} initial={0} onAddCart={onAddCart}/>  */}
    
</>
  );
}

export default App;
