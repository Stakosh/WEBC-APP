// Layout.js
import React from 'react';
import logo from '../img/logo.jpg';
//import fondo2 from  '../img/foto-fondo2.jpg';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok, FaTwitter } from 'react-icons/fa';



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
             <a href="https://www.fevochi.cl/wp-content/uploads/2023/10/Calendario-Fevochi-2023-6.pdf" target="_blank" className='nav-link'>
               Justificaciones
             </a>
             <Link to="/noticias" className='nav-link'>
               Proximos Cursos
             </Link>
             <a href="#contacto" className='nav-link'>
               Contacto
             </a>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>


     <div style={{ width: '100%' }}>
     {children}
     </div>




     <footer id="contacto" style={{ backgroundColor: '#033D87', color: 'white', padding: '20px 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Acerca de UAI</h4>
            <p>
              La Universidad Adolfo Ibáñez (UAI) es una universidad privada de
              excelencia en Chile. Es reconocida por su calidad educativa y por su
              contribución a la investigación y el desarrollo.
            </p>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <h4>Contacto</h4>
                <p>Correo: info@uai.cl</p>
                <p>Teléfono: +56 2 23313100</p>
                <p>Dirección: Diagonal Las Torres 2640, Peñalolén, Santiago, Chile</p>
              </div>
              <div className="col-md-6">
                <h4>Redes Sociales</h4>
                <div className="social-icons">
                  <a href="https://www.instagram.com/uai_oficial/" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ color: 'white', marginRight: '10px' }} /></a>
                  <a href="https://www.facebook.com/UAI.Oficial/" target="_blank" rel="noopener noreferrer"><FaFacebook style={{ color: 'white', marginRight: '10px' }} /></a>
                  <a href="https://www.youtube.com/user/universidadai" target="_blank" rel="noopener noreferrer"><FaYoutube style={{ color: 'white', marginRight: '10px' }} /></a>
                  <a href="https://www.tiktok.com/@uai" target="_blank" rel="noopener noreferrer"><FaTiktok style={{ color: 'white', marginRight: '10px' }} /></a>
                  <a href="https://twitter.com/uai_oficial" target="_blank" rel="noopener noreferrer"><FaTwitter style={{ color: 'white' }} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </footer>
   </div>
 );
};


export default Layout;