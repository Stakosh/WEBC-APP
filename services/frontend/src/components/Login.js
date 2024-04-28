import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; // Importa useTranslation de react-i18next
import ImgFondo from '../img/fondo-1.jpg';  // Asegúrate de que la ruta de la imagen sea correcta

function Login() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation("global"); // Usa useTranslation para acceder a las funciones de traducción
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Login successful:', data);
                navigate('/dashboard');  // Navegar al dashboard tras un login exitoso
            } else {
                console.error('Login failed:', data.error);
                alert(data.error || 'Invalid credentials');  // Proveer retroalimentación por un login fallido
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Error during login. Please try again.');
        }
    };

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);  // Cambiar el idioma utilizando i18n
    };

    return (
        <div style={{ backgroundImage: `url(${ImgFondo})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
            <Container>
                <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
                    <Col md={6} lg={4}>
                        <div className="login-box bg-white p-4 rounded shadow">
                            <h2 className="text-center mb-4">{t('login')}</h2> {/* Utiliza t() para traducir texto */}
                            <Form onSubmit={handleFormSubmit}>
                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Label>{t('email')}:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder={t('email')}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPassword" className="mb-3">
                                    <Form.Label>{t('password')}:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder={t('password')}
                                        required
                                    />
                                </Form.Group>

                                <Button type="submit" className="w-100 mb-2" style={{ backgroundColor: '#83d134', color: 'black' }}>
                                    {t('login')}
                                </Button>
                            </Form>
                            <div className="text-center">
                                <Button variant="link" onClick={() => navigate('/new')}>{t('newRegister')}</Button>
                                <Button variant="link" onClick={() => navigate('/forgot-password')}>{t('forgotPassword')}</Button>
                            </div>
                            <div className="text-center mt-3">
                                <Button variant="outline-secondary" size="sm" onClick={() => handleLanguageChange('en')}>
                                    English
                                </Button>
                                {' '}
                                <Button variant="outline-secondary" size="sm" onClick={() => handleLanguageChange('es')}>
                                    Español
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;