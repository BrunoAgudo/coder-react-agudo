import  { createContext } from "react";
import { useState } from "react";


export const CartContext =  createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
  
 
    
    const agregarCart = (Item) => {
      setCart([...cart, Item])  
     }
  
    const removerCart = (id) => {
      setCart ( cart.filter(prod=> prod.id !== id))
      
    }
  
    const vaciarCart = () => {
      setCart ([]) 
     }
  
    const totalCart = () => {
      return  cart.reduce((acc, prod) => acc + prod.contador, 0)  
    }

    const totalCompra =() => {
        return  cart.reduce((acc, prod) => acc + prod.price * prod.contador, 0)

    }
  
    const isInCart = (id) => {
      return  cart.some(prod => prod.id === id)
    }
  



return (

<CartContext.Provider value={{cart, agregarCart, removerCart, vaciarCart, totalCart, isInCart, totalCompra}}>
    {children}



</CartContext.Provider>

)

}
