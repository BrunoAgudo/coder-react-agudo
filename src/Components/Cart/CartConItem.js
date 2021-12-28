import React, {useContext} from "react";
import { BsFillTrashFill } from "react-icons/bs"
import { Link } from "react-router-dom";
import { CartContext } from './CartContext'


export default function CartConItem() {

    const {vaciarCart, cart, removerCart,totalCompra} =useContext(CartContext)





return (


    <div className='container'><br/>
    <h2>Carrito de compras</h2>
     <hr/>
     { cart.map((prod) => (
 <div className='container'>
             <div className='row'> 
                 <div className='col-sm 3'><h5>{prod.name}</h5> </div>
                 <div className='col-sm 3'> <p>Precio: $ {prod.price}</p> </div>
                 <div className='col-sm 3'> <p>Cantidad: {prod.contador} </p> </div>
                 <div className='col-sm 3'><button onClick={() => removerCart(prod.id)}><BsFillTrashFill/></button></div> 
                 <hr/>   
             </div>
 </div>))
     }
         
         <h4>Total Compra $ { totalCompra()} </h4>
         <button onClick={vaciarCart} className='btn btn-danger  my-5'> Vaciar Carrito </button>
         <Link to='/pago' className='btn btn-success mx-3'> Terminar Compra </Link>
</div> 






)



}