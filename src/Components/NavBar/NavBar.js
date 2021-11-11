import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import './NavBar.css'
import CartWidget from './CartWidget'


export default function NavBar () {


 return (
<Navbar bg="light" expand="lg" >
  <Container >
    <Navbar.Brand href="#home">Yaguaron <br/> <span className = "subtitulo">Equipamiento de Gimnasios </span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          
          <NavDropdown.Item href="#action/3.3">Aeróbicos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Barras y Discos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Mancuernas y Pesas Rusas</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Métodos de pagos</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <CartWidget /> 
  </Container> 
    
</Navbar> )

}