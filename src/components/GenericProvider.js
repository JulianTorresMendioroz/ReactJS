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
 
    const emptyCart = () => {
    setCart([])

    }

    const deleteProduct = (prodId) => {

        let cartNew = cart.filter((prodOnCart) =>(prodOnCart.id !== prodId))
        setCart(cartNew)

    }

    const totalPrice = () => {

        return cart.reduce((prev, acc) => prev + acc.quantity * acc.price, 0)
    }

    const totalItem = () => {
        let total = 0;
        cart.forEach(itemInCart => {
            total = total + itemInCart.quantity
        })
        return total;
    }

    const contextValue = {

        cart: cart,
        setCart: setCart,
        addToCart: addToCart,
        isInCart: isInCart,
        emptyCart: emptyCart,
        deleteProduct: deleteProduct,
        totalPrice: totalPrice,
        totalItem: totalItem

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
