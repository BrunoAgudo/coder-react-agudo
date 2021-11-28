import React from "react";
import Item from "./Item"
import './item.css';
import { Row, Container } from "react-bootstrap";



export default function ItemList({productos}) {


    return(

        <Container className="my-5">
            <h2>Listado de Productos</h2> <hr/>
        
            <Row>
                {productos.map((prod) => <Item prod={prod}/>) }                  
                                   
            </Row>
                                
        </Container>

        
    )
}