import React from 'react'
import './item.css';

 
export default function  ItemListContainer ( {greeting})  {



    return (
        <div className= "container">

            <h1> {greeting} </h1>

        </div>



    )
}