import React  from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import './NavBar.css'
import CartWidget from '../Cart/CartWidget'
import { Link } from 'react-router-dom'


export default function NavBar () {


 return (
   
<Navbar bg="light" expand="lg" >
  <Container >
    <Link className ="navbar-brand" to="/">Yaguaron <br/> <span className ="subtitulo">Equipamiento de Gimnasios </span></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          
          <Link className="dropdown-item" to="/category/aerobico/"> Aeróbicos</Link>
          <Link className="dropdown-item" to="/category/accesorio/">Accesorios</Link>
          <Link className="dropdown-item" to="/category/barras/">Barras y Discos</Link>
          <Link  className="dropdown-item"to="/category/mancuernas/">Mancuernas y Pesas Rusas</Link>
          <NavDropdown.Divider />
          <Link className="dropdown-item" to="/">Métodos de pagos</Link>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <CartWidget /> 
  </Container> 
    
</Navbar> )

}