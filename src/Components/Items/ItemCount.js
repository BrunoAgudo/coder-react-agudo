import './item.css';


export default function ItemCount  ({max, contador, setContador,onAdd}) {
          
    
    const suma = () => { 
    
        contador < max && setContador(contador + 1)  
    }

    const resta = () => {

        contador > 0 &&   setContador(contador - 1)
     }
    
     
        
     
    return (
        <div className= "contador">               
            <button  onClick={resta}type="button" className="btn btn-secondary cont " > - </button> 
               <span className="btn cont" > {contador} </span>
            <button onClick={suma} type="button" className="btn btn-primary cont"> + </button> <br/>

            <button onClick={onAdd} type="button" className="btn btn-success my-2"> Agregar al Carrito </button>
              
        </div>

    )
}