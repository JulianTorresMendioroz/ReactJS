import React, { useEffect, useState } from 'react'
import productsSrc from '../products.json'


const Item = () => {


  const [products, setProducts] = useState([])
  const [load,setLoad] = useState(false)
    
useEffect(() => {

  fetch(productsSrc)
  console.log(productsSrc)

  setTimeout(() => {

    setLoad(true)

  },2000)

},[])


  return (
    <>
  
    {load ? 'Productos Cargados' : 'Cargando...'}
  
    </>
  )
}

export default Item
