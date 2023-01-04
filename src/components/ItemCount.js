import React from 'react'
import { useState } from 'react'

const ItemCount = (props) => {

let {stock, initial} = props

const [counter,setCounter] = useState(parseInt(initial))

let increase = () => {

 setCounter(counter + 1) 
 console.log(setCounter)

}

let decrease = () => {

setCounter(counter - 1)
console.log(setCounter)

}

if(counter > 5) {

  alert('No hay mas stock disponible')


}

const [disabled,setDisabled] = useState(true)

if(disabled == true) {

  setDisabled(decrease())

}








  return (
    <>

<button onClick={increase}>+</button>
<span>{counter}</span>
<button disabled={true} onClick={decrease}>-</button>
<button>Agregar al carrito</button>


    </>
  )
}

export default ItemCount;
