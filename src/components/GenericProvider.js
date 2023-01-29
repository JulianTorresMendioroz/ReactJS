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
    const [totalProducts, setTotalProducts] = useState(0)

    const addProduct = (product, quantity) => {

     






    }

    const deleteProduct = (id) => {

        let indexProd = cart.findIndex((prod) => prod.id === id);

        cart.splice(indexProd, 1);



        }

    }

    const emptyCart = () => {

        setCart([])


    }

    const onCart = (id) => {
        
        const findId = cart.find((el) => el === id)
        if(findId){

            

    }




    const contextValue = {

        cart: cart,
        totalProducts: totalProducts,
        setCart: setCart,
        setTotalProducts: setTotalProducts
    
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
