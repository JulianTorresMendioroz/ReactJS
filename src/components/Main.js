import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ItemListContainer from "../components/ItemListContainer";
import ItemDetail from './ItemDetail';
import { Contact } from "../components/Contact";
import { Us } from '../components/Us';


const Main = () => {

  return (
    <div>
        <main>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/us" element={< Us/>}/>
            <Route path='/products/:id' element={< ItemDetail/>}/>
        </Routes>
        </main>
    </div>
  )
}

export default Main
