import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCount from "./components/ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const onAddCart = (quantity) => {

    console.log(`Compraste ${quantity} productos`)
      
  }

  return (
<> 

    <NavBar /> 
    <ItemListContainer /> 
    <ItemDetailContainer />

     {/* <ItemCount stock={5} initial={0} onAddCart={onAddCart}/>  */}
    
</>
  );
}

export default App;
