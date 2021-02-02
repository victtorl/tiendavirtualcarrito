import React from 'react'
import Link from 'next/link'
import { Button, Form, FormControl, Nav, Navbar, NavLink } from 'react-bootstrap'


const Navegacion=()=>{

    return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Tienda tawa</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
           <Link href="/">
            <a className="nav-item nav-link" href="#">Inicio</a>
            </Link>
            <Link href="/login">
            <a className="nav-item nav-link" href="#">Login</a>
            </Link>
            <Link href="/chatbot">
            <a className="nav-item nav-link" href="#">Chatbot</a>
            </Link>
            <Link href="/cart">
            <a className="nav-item nav-link" href="#">Carrito</a>
            </Link>
    </Nav>
    <Form inline>
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
      {/* <Button variant="outline-success">Search</Button> */}
    </Form>
  </Navbar.Collapse>
</Navbar>

   
      
    )
}


export default Navegacion