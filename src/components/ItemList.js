import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {

    console.log('ITEMLIST',products)

  return (

    <>

    {products.map((prod)=>{
        return(
            <Item product={prod} key={prod.id}/> 
            
        )
    })}
    
    </>

  )
}

export default ItemList;