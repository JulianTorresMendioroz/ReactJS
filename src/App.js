import React from "react";
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Main from "./components/Main";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./components/ItemCount";





function App() {

  const onAddCart = (quantity) => {

    console.log(`Compraste ${quantity} productos`)
      
  }

  return (
<BrowserRouter> 
    
      < Header />
      < Main />
      < Footer />

    
   
     {/* <ItemCount stock={5} initial={0} onAddCart={onAddCart}/>  */}
    
</BrowserRouter>
  );
}

export default App;
