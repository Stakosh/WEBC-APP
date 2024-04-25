import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Image, Container, Button, Card, Row, Col, Form } from 'react-bootstrap';
import ImgFondo from '../img/fondo-1.jpg';

function Inicio() {
    // Add state to manage form inputs and form submission
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        // Add your login logic here (e.g., authenticate the user)
        console.log('Login submitted with email:', email, 'and password:', password);
    };

    return (
        <div style={{ backgroundImage: `url(${ImgFondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
                <Container>
                    <Row>
                        {/* Add login form section */}
                        <Col md={4} className="offset-md-4 mt-5">
                            <div className="login-box bg-white p-4 rounded shadow-lg">
                                <h2 className="text-center">Login</h2>
                                <Form onSubmit={handleLogin}>
                                    {/* Email input */}
                                    <Form.Group controlId="formEmail" className="mb-3">
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter email"
                                            required
                                        />
                                    </Form.Group>

                                    {/* Password input */}
                                    <Form.Group controlId="formPassword" className="mb-3">
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter password"
                                            required
                                        />
                                    </Form.Group>

                                    {/* Submit button */}
                                    <Button type="submit" className="w-100 btn-primary">Login</Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Inicio;
