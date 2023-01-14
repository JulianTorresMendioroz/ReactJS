import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import '../components/ItemDetail.css'

function ItemDetailContainer () {

    const [load,setLoad] = useState(false)
    const [product, setProduct] = useState({})
  
    const {id} = useParams()
    
    useEffect(() => {

      const prods = fetch(`https://fakestoreapi.com/products/${id}`);
  
      prods
          .then((res) => res.json())    
          .then((data) => setProduct(data),
              setLoad(true))    
            .catch((err) => console.log(err))
            .finally(() => {

            console.log("Promise completed");
            
          });

  }, [id]);



  return (
    <>
    
    {load ? <div className='cardProds'>
    <ItemDetail product={product}/> </div>
    :  <h1>Cargando productos</h1> }
    </>
  )
}

export default ItemDetailContainer;
