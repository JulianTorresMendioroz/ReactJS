import React, { useEffect, useState } from 'react';
import Item from './Item';


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
    <Item  product={products}/> </div>
    :  <h1>Cargando productos</h1> }

    
    </>
  )
}

export default ItemDetailContainer;
