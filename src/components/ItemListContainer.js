import React, { useEffect, useState } from 'react';
import productsSrc from '../products.json'
import ItemList from './ItemList';

function ItemListContainer () {

    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
  
      fetch(productsSrc)
  
      setTimeout(() => {
        setProducts(productsSrc)
        
  
      },2000)
  
    },[])



  return (
    <>
    
    {products.length == 0 ? <h1>Cargando productos</h1> : <ItemList products={products}/>}
    
    </>
  )
}

export default ItemListContainer;
