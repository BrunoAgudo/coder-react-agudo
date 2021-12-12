import './item.css';



export default function ItemCount  ({max, contador, setContador, agregarCart}) {
   
    
  

  
    const suma = () => { 
    
        contador < max && setContador(contador + 1)  }

    const resta = () => {

        contador > 0 &&   setContador(contador - 1)
            }
     
    return (
        <div className= "contador">
    { /*       <div className = "row">        
               <div className="col-sm-4 "> <button  onClick={resta}type="button" className="btn btn-danger " > - </button> </div>
               <div className="col-sm-4 cont"> {contador} </div>
               <div className="col-sm-4 "> <button onClick={suma} type="button" className="btn btn-success "> + </button> </div> 
            
    </div>  */}
            
                <button  onClick={resta}type="button" className="btn btn-secondary cont " > - </button> 
               <span className="btn cont" > {contador} </span>
               <button onClick={suma} type="button" className="btn btn-primary cont"> + </button> <br/>

               <button onClick={agregarCart} type="button" className="btn btn-success my-2"> Agregar al Carrito </button>
              
        </div>

    )
}