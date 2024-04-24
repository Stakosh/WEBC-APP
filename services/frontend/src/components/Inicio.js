// Inicio.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Image, Container, Button, Card, Row, Col } from 'react-bootstrap';
import ImgFondo from '../img/fondo-1.jpg';
import gatito from '../img/gatito.png';
import fondo2 from  '../img/foto-fondo2.jpg';





function Inicio() {

 return (
   <div>
   {/* Contenido específico de la página de inicio */}
     <section className="hero">
         <Image src={fondo2} alt="Hero" fluid />
         <div className="hero-content" style={{ color: 'white' }}>
           <div className='fevochi-container'>
             <span id='somos'>#Somos </span>
             <div id='fevochi' className='fevochi'> QUESO</div>
           </div>
         </div>
     </section>


       <Container className="news-container">

           <h2>Horario? no se que va aqui</h2>
           <Row className='justify-content-center'>
             <Col md={6} className='mb-3 mx-auto'>
               <Card>
                 <Card.Img variant="top" src={gatito} />
                 <Card.Body>
                   <Card.Subtitle className="mb-2" style={{ color: '#033D87'}} >15/11/2023</Card.Subtitle>
                   <Card.Title>
                     <a href="#" style={{ color: '#033D87', textDecoration: 'none' }}>
                     PROXIMOS CURSOS
                     </a>
                   </Card.Title>
                 </Card.Body>
               </Card>
             </Col>
           </Row>
          
           <Button Button variant="primary" className="mt-3">
           <Link to="/noticias" className='news_link'>
               PROXIMOS CURSOS
             </Link>
           </Button>

       </Container>


          


       <Container className="event-container">


       <a href="https://www.fevochi.cl/wp-content/uploads/2023/10/Calendario-Fevochi-2023-6.pdf" target="_blank" rel="noopener noreferrer">
         <Button variant="primary" className="news_link">
           Ver Calendario
         </Button>
       </a>
       </Container>

   </div>
 );
}


export default Inicio;

