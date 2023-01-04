import React from 'react'
import { useState } from 'react'

const ItemCount = (props) => {

let {stock, initial, string} = props

const [counter,setCounter] = useState(initial)

let increase = () => {

 initial =  setCounter(counter + 1) 
 console.log(setCounter)
  

}


let decrease = () => {

setCounter(counter - 1)
console.log(setCounter)

}


  return (
    <>

<button onClick={increase}>+</button>
<span>{counter}</span>
<button onClick={decrease}>-</button>
<button>Agregar al carrito</button>


    </>
  )
}

export default ItemCount;
