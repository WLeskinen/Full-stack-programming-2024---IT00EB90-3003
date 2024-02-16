import React from 'react';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

// Function which displays our main layout
// Containers implemented to make the website cover the entire page
const Layout = () => {
  return (
    <>
      <Navbar bg="light" variant="black" className="px-3 py-2">
        <Navbar.Brand href="/"><h5>My Website</h5></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/blogs">Blogs</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>

      <Container className="mt-4 px-3">
        <Outlet />
      </Container>
    </>
  )
};

export default Layout;
