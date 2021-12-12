
import React from "react"
import {useNavigate, Link} from "react-router-dom"
import ItemCount from "../ItemCount";
import { Container, Row, Col } from 'react-bootstrap';
import './../item.css';
import { useState } from "react"



export default function ItemDetail ({img, name, cantidad, price, description}) {
    const [terminar, setTerminar] = useState(false)
    const  [contador, setContador] = useState(0)
    
    const navigate = useNavigate()
    
    const volveratras = () => {
         navigate (-1)    }

    const agregarCart = () => {
        setTerminar(true)
    }

    return (
        
        <Container className= "my-5">
            <h2>Detalles de Productos</h2> <hr/>
            <Row>
                <Col sm={8}> <img src={img} width="350" height="350" alt={name}/> </Col>
                <Col sm={4}> 
                    <h2> {name} </h2> <br/>
                    <p> Stock Disponible:  {cantidad} </p>
                    <p className="price"> $ {price} </p>
                    
                    <br/>

                {  !terminar ? 
                    <ItemCount
                         max={cantidad} 
                         contador={contador} 
                         setContador={setContador} 
                         agregarCart={agregarCart}/> 
                         : 
                    <Link to="/cart" className='btn btn-success'>Terminar compra </Link> }
                         <hr/>
                
                    <button onClick={volveratras} className="btn btn-secondary my-2" size="lg" > Volver </button> 
                </Col>
            </Row>
            <Row> <hr/>
                <h3>Características</h3>
                <p>{description}</p>
            </Row>
            
        </Container>
        
    )
}