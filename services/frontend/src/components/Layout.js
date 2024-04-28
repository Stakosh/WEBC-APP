// Layout.js
import React from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Image, Button } from 'react-bootstrap'; // Asegúrate de importar Button desde 'react-bootstrap'
import { useTranslation } from 'react-i18next'; // Importa useTranslation de react-i18next
import '../App.css';

const Layout = ({ children }) => {
    const { t, i18n } = useTranslation(); // Usa useTranslation para acceder a las funciones de traducción

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang); // Función para cambiar el idioma utilizando i18n
    };

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
                                {t('layout.link1')} {/* Utiliza t() para traducir texto */}
                            </a>
                            <Link to="/cursos" className='nav-link'>
                                {t('layout.link2')}
                            </Link>
                            <Link to="/justificaciones" className='nav-link'>
                                {t('layout.link3')}
                            </Link>
                            <Link to="/asistencias" className='nav-link'>
                                {t('layout.link4')}
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="language-buttons">
                        <Button variant="outline-secondary" size="sm" onClick={() => changeLanguage('en')}>
                            English
                        </Button>
                        {' '}
                        <Button variant="outline-secondary" size="sm" onClick={() => changeLanguage('es')}>
                            Español
                        </Button>
                    </div>
                </Container>
            </Navbar>

            <div style={{ width: '100%' }}>
                {children}
            </div>
        </div>
    );
};

export default Layout;