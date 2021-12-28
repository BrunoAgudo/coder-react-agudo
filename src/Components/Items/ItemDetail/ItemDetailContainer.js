import React, { useEffect, useState } from 'react'
import pedirDatos from '../../../Recursos/pedirDatos'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router'
import { Spinner } from 'react-bootstrap'




export default function ItemDetailContainer () {

 const [loading,setLoading] = useState(false)
 const [Item, SetItemDetail] = useState([])    

    const {prodId} = useParams()

    useEffect(()=>
 {
    setLoading (true)
    
    pedirDatos()
   
        .then((resp)=> {
            
        SetItemDetail(resp.find (prod => prod.id === Number(prodId)))
        } )
        .catch((error)=> {console.log(error)})

        .finally(()=> {
            setLoading(false)
        })
 },[prodId])

return (
    <> 
    { loading  ? <Spinner animation="border" variant="success"  />

        
    :     <ItemDetail {...Item}/> }
    </>
     
       



)


} 