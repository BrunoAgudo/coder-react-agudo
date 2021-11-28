import React, { useEffect, useState } from 'react'
import pedirDatos from '../../Recursos/pedirDatos';
import './item.css';
import ItemList from './ItemList'

 
export default function  ItemListContainer ()  {

    const [loading,setLoading] = useState(false)
    const [productos,setProductos] = useState([])
 console.log (productos)
 useEffect(()=>
 {
    setLoading (true)
    pedirDatos()
   
        .then((resp)=> {
            
        setProductos(resp)
        } )
        .catch((error)=> {console.log(error)})

        .finally(()=> {
            setLoading(false)
        })
 },[])

    return (
          <>
           { loading  ? <h3>Cargando...</h3>
       
            : <ItemList productos ={productos}/>
            }
       
       </>
    )
}