import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import '../components/ItemList.css'
import '../components/ItemListContainer.css'
import { useParams } from 'react-router-dom';

function ItemListContainer () {

    
    const [load,setLoad] = useState(false)
    const [products, setProducts] = useState([])
  
    const {categoryId} = useParams()

    console.log(products)
    
    useEffect(() => {

      const URL = categoryId ? `https://fakestoreapi.com/products/category/${categoryId}` : 'https://fakestoreapi.com/products/'

      const prods = fetch(URL)

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
  }, [categoryId]);



  return (
    <>
    
    <div className='divInfo'>
    <h1>TAKI CAP HOODIES</h1>
    <h3>Los mejores buzos para vos</h3>
    </div>

    {load ?
    
     <div className='cardProds'>
    <ItemList products={products}/>
     </div>

    :  <h1>Cargando productos</h1> }

    
    </>
  )
}

export default ItemListContainer;
