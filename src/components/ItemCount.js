import React from 'react'
import Button from 'react-bootstrap/Button';
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
<Button variant="dark" disabled={counter === initial} onClick={decrease}>-</Button>
<span>{counter}</span>
<Button variant="dark" disabled={counter === stock} onClick={increase}>+</Button>
</div>

<Button variant="success"disabled={counter === 1 || stock === 1} onClick={() => onAddCart(counter)} >
Agregar al carrito
</Button>


    </>
  )
  }

export default ItemCount;
