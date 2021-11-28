import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './item.css';


export default function Item ({prod}) {


    return (
        
        
        <Card key={prod.id}  className="m-3" style={{ width: '18rem' }}>
                <Card.Title className="titulo">{prod.name} </Card.Title> <hr/>
            <Card.Body>
                <Card.Img variant="top" src={prod.img} />
                <Card.Text>  {prod.detail}  </Card.Text>
                <Card.Text> Precio: ${prod.price}  </Card.Text>
            
             </Card.Body>   <hr/>                     
                <Button variant="primary" className="primary" size="sm"  >Ver más</Button>
        </Card>
       
       
    )
}