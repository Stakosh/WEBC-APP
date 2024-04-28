import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgFondo from '../img/foto-fondo2.jpg';
import { Button, Container, Row, Col } from 'react-bootstrap';
import LoganLerman from '../GIFS/loganlermanteamo.gif'; 

function Inicio() {
    return (
        <div>
            {/* Contenedor para la imagen de fondo */}
            <div
                style={{
                    backgroundImage: `url(${ImgFondo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    height: '100vh',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* Contenedor para los botones */}
                <Container>
                    <Row className="justify-content-center">
                        {/* Columna para el botón "Justificaciones" */}
                        <Row xs="auto" className="justify-content-center">
                            <Button
                                variant="light"
                                className="mb-3"
                                style={{ width: '50%', padding: '10px', color: 'black', backgroundColor: 'whitesmoke' }}
                                onClick={() => console.log('Justificaciones')}
                            >
                                Justificaciones
                            </Button>
                        </Row>

                        {/* Columna para el botón "Próximos Cursos" */}
                        <Row xs="auto" className="justify-content-center">
                            <Button
                                variant="light"
                                className="mb-3"
                                style={{ width: '50%', padding: '10px', color: 'black', backgroundColor: 'whitesmoke' }}
                                onClick={() => console.log('Próximos Cursos')}
                            >
                                Próximos Cursos
                            </Button>
                        </Row>

                        {/* Columna para el botón "Asistencias" */}
                        <Row xs="auto" className="justify-content-center">
                            <Button
                                variant="light"
                                style={{ width: '50%', padding: '10px', color: 'black', backgroundColor: 'whitesmoke' }}
                                onClick={() => console.log('Asistencias')}
                            >
                                Asistencias
                            </Button>
                        </Row>
                    </Row>
                </Container>
            </div>
            <Col>
            <Container>
            
            <img src={LoganLerman} alt="Logan Lerman" style={{ width: '30%', height: '30%' }} />
        
            </Container>
            </Col>
        </div>
    );
}

export default Inicio;

