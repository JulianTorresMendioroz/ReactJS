import React, { useState } from 'react'
import { useContext,createContext } from 'react'

const context = createContext()
const Provider = context.Provider;

export const useCart = () => {

    const contextValue = useContext(context)
    return contextValue;

}

const GenericProvider = ({children}) => {

    const [cart, setCart] = useState([])

   const isInCart =  (id) => {

    cart.find((el) => el.id === id)

   }

   const addToCart = (item, quantity) => {

    if(isInCart(item.id)) {
        setCart(
           cart.map((prod) => {
            return prod.id === item.id
            ? {...prod, count: prod.quantity += quantity}
            : prod
           }) 
        );
    }else{
        setCart([...cart, {...item, quantity}])
    }}
 






    const contextValue = {

        cart: cart,
        setCart: setCart,
        addToCart: addToCart,
        isInCart: isInCart

    }

  return (
    <>
    <Provider value={contextValue}>
        {children}
        </Provider>
    </>
  )
}

export default GenericProvider;
