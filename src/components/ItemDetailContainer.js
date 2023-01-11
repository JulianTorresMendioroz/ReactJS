import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import '../components/ItemDetail.css'


function ItemDetailContainer () {

    const [load,setLoad] = useState(false)
    const [products, setProducts] = useState([])
  
    console.log(products)
    
    useEffect(() => {

      const prods = fetch("/products.json");
  
      prods
          .then((res) => res.json())    
          .then((data) => setProducts(data),
            setTimeout(() => {
                setLoad(true)
            },2000))    
            .catch((err) => console.log(err))
            .finally(() => {

            console.log("Promise completed");
            
          });

  }, []);



  return (
    <>
    
    {load ? <div className='cardProds'>
    <ItemDetail  products={products}/> </div>
    :  <h1>Cargando productos</h1> }
    </>
  )
}

export default ItemDetailContainer;
