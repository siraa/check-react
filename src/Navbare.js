import React from 'react'
import {Container,NavDropdown,Navbar,Nav} from  'react-bootstrap' ;
const Navbare = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
        <NavDropdown title="Formation" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">React</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">python</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">FullStack</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navbare
