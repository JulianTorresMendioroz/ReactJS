import react from 'react'

const Item = (product) => {

  return (
    <>
    <>
      <img src={product.img}/>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </>
    </>
  )
}

export default Item

