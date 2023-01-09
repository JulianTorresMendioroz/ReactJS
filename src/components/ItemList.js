import React from 'react'
import Item from './Item'


const ItemList = ({products}) => {

    console.log('ITEMLIST',products)

  return (

    <>

    {products.map((prod)=>{
        return(
            <Item product={prod} key={prod.id}/> 
            // <ItemDetail product={prod} key={prod.id}/> //ESTO CREO QUE SERIA ASI, PERO NO SE COMO MAPEAR 1 SOLO PRODUCTO EN ITEMDETAIL
        )
    })}
    
    </>

  )
}

export default ItemList;