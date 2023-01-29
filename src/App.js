import React from "react";
import { BrowserRouter } from 'react-router-dom'
import GenericProvider from "./components/GenericProvider";
import Header from './components/Header'
import Main from "./components/Main";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
<GenericProvider>

      <BrowserRouter> 
      < Header />
      < Main />
      < Footer />
      </BrowserRouter>
      </GenericProvider>



  )
}

export default App;
