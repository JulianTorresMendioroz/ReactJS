import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {

    console.log(products)

  return (

    <>

    {products.map((prod)=>{
        return(
            <Item product={prod} key={prod.id}/> //Esto busque la solucion en internet, probe pero no me muestra
        )                                        //los productos en ItemListContainer
    })}
    
    </>

  )
}

export default ItemList;