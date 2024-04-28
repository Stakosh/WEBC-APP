// Layout.js
import React from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import '../App.css';


const Layout = ({ children }) => {
 return (
   <div>
     <Navbar bg="white" variant="white" expand="lg" className="justify-content-between">
       <Container>
           <Navbar.Brand as={Link} to="/">
           <Image src={logo} alt="Logo" fluid style={{ maxHeight: '80px' }} />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className='ml-auto'>
             <a href="https://www.fevochi.cl/wp-content/uploads/2023/10/Calendario-Fevochi-2023-6.pdf" target="_blank" rel="noreferrer noopener" className='nav-link'>
              Probando 1
             </a>
             <Link to="/cursos" className='nav-link'>
             Probando 2
             </Link>
             <Link to="/justificaciones" className='nav-link'>
             Probando 3
             </Link>
             <Link to="/asistencias" className='nav-link'>
             Probando 4
             </Link>



           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
     
     <div style={{ width: '100%' }}>
     {children}
     </div>
     
    </div>
 );
};

export default Layout;