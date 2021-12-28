import React from 'react'
import { BsFillBasket2Fill } from "react-icons/bs"
import { CartContext } from './CartContext'
import { useContext } from 'react'
import { Link } from "react-router-dom"



export default function CartWidget () {

    const {totalCart} = useContext(CartContext)
    

    return (
    <div>
        <Link to='/cart'><BsFillBasket2Fill className= "icon" />
            <span>{totalCart()}</span>
        </Link>
    </div>
    )
}