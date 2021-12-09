import React from "react";
import Card from 'react-bootstrap/Card';

import './item.css';
import { Link } from "react-router-dom";


export default function Item ({prod}) {


    return (
        
        
        <Card key={prod.id}  className="m-3" style={{ width: '18rem' }}>
                <Card.Title className="titulo">{prod.name} </Card.Title> <hr/>
            <Card.Body>
                <Card.Img variant="top" src={prod.img} />
                <Card.Text>  {prod.detail}  </Card.Text>
                <Card.Text> Precio: ${prod.price}  </Card.Text>
            
             </Card.Body>   <hr/>                     
                <Link to={`/detail/${prod.id}`} variant="primary" className="btn btn-primary" size="sm"  >Ver más</Link> <br/>
        </Card>
       
       
    )
}