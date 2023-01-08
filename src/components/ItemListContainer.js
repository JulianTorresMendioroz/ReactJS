import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

function ItemListContainer () {

    
    const [products, setProducts] = useState([])

    console.log(products)
    
    useEffect(() => {
  
     const prods = fetch('/products.json')

     prods
     .then((res) => console.log(res.json()))
     .catch((err) => console.log(err))
     .finally(() => {console.log('finalizado')})
  
      setTimeout(() => {
        setProducts(prods)
        
        console.log(prods)
      },2000)
  
    },[])



  return (
    <>
    
    {products.length === 0 ? <h1>Cargando productos</h1> : <ItemList products={products}/>}

    
    </>
  )
}

export default ItemListContainer;
