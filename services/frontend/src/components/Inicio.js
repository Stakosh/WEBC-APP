// Inicio.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Image, Container, Button, Card, Row, Col } from 'react-bootstrap';
import ImgFondo from '../img/fondo-1.jpg';
import ImgFondo2 from  '../img/foto-fondo2.jpg';





function Inicio() {
 return (
   <div style={{ backgroundImage: ImgFondo, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div>
      <Container>

      </Container>
    </div>

   </div>
 );
}

export default Inicio;

