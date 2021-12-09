
import React from "react"
import Button from 'react-bootstrap/Button';
import ItemCount from "../ItemCount";
import { Container, Row, Col } from 'react-bootstrap';
import './../item.css';



export default function ItemDetail ({img, name, cantidad, price, description }) {


    return (
        
        <Container className= "my-5">
            <h2>Detalles de Productos</h2> <hr/>
            <Row>
                <Col sm={8}> <img src={img} width="350" height="350" alt={name}/> </Col>
                <Col sm={4}> 
                    <h2> {name} </h2> <br/>
                    <p> Stock Disponible:  {cantidad} </p>
                    <p className="price"> $ {price} </p><br/>
                    <ItemCount/> <hr/>
                    <Button variant="primary" className="bot" size="lg" > Comprar </Button> </Col>
            </Row>
            <Row> <hr/>
                <h3>Características</h3>
                <p>{description}</p>
            </Row>
            
        </Container>
        
    )
}