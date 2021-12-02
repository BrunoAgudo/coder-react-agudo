import React, { useEffect, useState } from 'react'
import pedirDatos from '../../Recursos/pedirDatos';
import './item.css';
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'


 
export default function  ItemListContainer ()  {

    const [loading,setLoading] = useState(false)
    const [productos,setProductos] = useState([])

    const {cat} = useParams()
  
    console.log (cat)

 useEffect(()=>
 {
    setLoading (true)
    pedirDatos()
   
        .then((resp)=> {
            if (!cat) {         
        setProductos(resp)}
        else {
            setProductos( resp.filter(prod => prod.category === cat))
        }
        } )
        .catch((error)=> {console.log(error)})

        .finally(()=> {
            setLoading(false)
        })
 },[cat])

    return (
          <> 
           { loading  ? <h3>Cargando...</h3>
       
           
           : <ItemList productos ={productos}/> }
           </>
            
    )
}
