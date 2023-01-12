import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailCotainer from '../components/ItemDetailContainer'
import { Cart } from './Cart';


const Main = () => {

  return (
    <div>
        <main>
        <Routes>
            <Route path="/" element={< ItemListContainer />}/>
            <Route path='/item/:id' element={< ItemDetailCotainer />}/>
            <Route path="/category/:categoryId" element={< ItemListContainer />}/>
            <Route path="/cart" element={< Cart />}/>
        </Routes>
        </main>
    </div>
  )
}

export default Main
