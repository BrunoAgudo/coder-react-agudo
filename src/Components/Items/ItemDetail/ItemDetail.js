
import React, { useContext } from "react"
import {useNavigate, Link} from "react-router-dom"
import ItemCount from "../ItemCount";
import { Container, Row, Col } from 'react-bootstrap';
import './../item.css';
import { useState } from "react"
import { CartContext } from "../../Cart/CartContext";



export default function ItemDetail ({id, img, name, cantidad, price, description, max, onAdd}) {

    const {agregarCart, isInCart} = useContext(CartContext)

    const [contador, setContador] = useState(0)
    
    const navigate = useNavigate()
    
    const volveratras = () => {
         navigate (-1)   
           }
           
    const agregarAlCart = () => {
        if (contador>0) {
            agregarCart({
                id,
                name,
                price,
                contador,

            })}
       
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

                {  !isInCart(id) ? 
                    <ItemCount
                         max={cantidad} 
                         contador={contador} 
                         setContador={setContador} 
                         onAdd={agregarAlCart}/> 
                         : 
                    <Link to="/cart" className='btn btn-success'> Ver en el carrito </Link> }
                         <hr/>
                
                    <button onClick={volveratras} className="btn btn-secondary my-2" size="lg" > Volver </button> 
                </Col>
            </Row>
            <Row> <hr/>
                <h3>Características</h3>
                <p>{description}</p>
            </Row>
            
        </Container>
        
    )}
