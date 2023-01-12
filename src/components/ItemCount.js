import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAddCart}) => {

const [counter,setCounter] = useState(initial)

let increase = () => {

 setCounter(counter + 1) 
 console.log(setCounter)

}

let decrease = () => {

setCounter(counter - 1)
console.log(setCounter)

}

return (
    <>

<div>
<button disabled={counter === initial} onClick={decrease}>-</button>
<span>{counter}</span>
<button disabled={counter === stock} onClick={increase}>+</button>
</div>

<button disabled={counter === 1 || stock === 1} onClick={() => onAddCart(counter)} >
Agregar al carrito
</button>



    </>
  )
  }

export default ItemCount;
