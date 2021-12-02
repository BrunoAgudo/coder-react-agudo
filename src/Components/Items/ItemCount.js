import React, {  useState } from "react";
import './item.css';



export default function ItemCount  () {
   
    
  const  [contador, setContador] = useState(1)

   let cantidad = 10
    const suma = () => {
    
        if (contador < cantidad) {
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
        <div className= "contador">
    { /*       <div className = "row">        
               <div className="col-sm-4 "> <button  onClick={resta}type="button" className="btn btn-danger " > - </button> </div>
               <div className="col-sm-4 cont"> {contador} </div>
               <div className="col-sm-4 "> <button onClick={suma} type="button" className="btn btn-success "> + </button> </div> 
            
    </div>  */}
            
                <button  onClick={resta}type="button" className="btn btn-danger cont " > - </button> 
               <span className="btn cont" > {contador} </span>
               <button onClick={suma} type="button" className="btn btn-success cont "> + </button> 
              
        </div>

    )
}