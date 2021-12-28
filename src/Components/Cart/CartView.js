
import React, {useContext} from 'react'
import CartConItem from './CartConItem'
import { Link } from 'react-router-dom'

import { CartContext } from './CartContext'




export function CartView() {
 
    const {totalCart} =useContext(CartContext)
    

       
    
        
 

    return(
        
         !totalCart(0) ? 
         
        <div className='container'>
         <h2>El Carrito esta vacio</h2> 
         <Link to='/productos' className='btn btn-outline-primary my-3'> Volver a Productos</Link>
        </div>    
            :
    
            <CartConItem/>
        
    
        
        
    )
    }