import React, { useState } from "react";
import './item.css';

export default function ItemCount  () {

  const  [contador, setContador] = useState(1)

    const suma = () => {
       let stock = 10
        if (contador < stock) {
             setContador(contador + 1)
            console.log(contador) }
        else {setContador (contador)}
    }

    const resta = () => {
       let initial = 1
        if(contador > initial) { setContador(contador - 1)
            console.log(contador) }
        else {  setContador (contador)  }
    } 
    
    return (
        <div className= "container">
            <div className = "row">        
               <div className="col-sm-2 sum"> <button  onClick={resta}type="button" className="btn btn-danger "> - </button> </div>
               <div className="col-sm-2 cont"> {contador} </div>
               <div className="col-sm-2"> <button onClick={suma} type="button" className="btn btn-success "> + </button> </div> 
            
            </div>  
        </div>

    )
}