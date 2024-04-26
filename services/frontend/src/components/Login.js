import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import ImgFondo from '../img/fondo-1.jpg';
import { handleLogin } from '../utils/auth';


function Login2() {
       // State for managing form inputs
       const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Event handler for form submission
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // Call the imported handleLogin function with formData
        await handleLogin(formData);
    };

    // Event handler for input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Event handler for the "New Register" button
    const handleRegisterClick = () => {
        console.log('New register clicked');
        // Add your new register logic here (e.g., navigate to a new registration page)
    };

    // Event handler for the "I Forgot My Password" button
    const handleForgotPasswordClick = () => {
        console.log('Forgot password clicked');
        // Add your forgot password logic here (e.g., navigate to a forgot password page)
    };

    return (
        <div style={{ backgroundImage: `url(${ImgFondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Container>
                <Row>
                    <Col md={4} className="offset-md-4 mt-5">
                        <div className="login-box bg-white p-4 rounded shadow-lg">
                            <h2 className="text-center">Login</h2>
                            <Form onSubmit={handleLogin}>
                                {/* Email input */}
                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter email"
                                        required
                                    />
                                </Form.Group>

                                {/* Password input */}
                                <Form.Group controlId="formPassword" className="mb-3">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter password"
                                        required
                                    />
                                </Form.Group>

                                {/* Submit button */}
                                <Button type="submit" style={{ backgroundColor: '#83d134', color: 'black' }} className="w-100 btn-primary">
                                    Login
                                </Button>

                                {/* Additional options: New Register and Forgot Password */}
                                <div className="mt-3 d-flex justify-content-between">
                                    {/* New Register button */}
                                    <Button type="button" onClick={handleRegisterClick} className="btn btn-link">
                                        New Register
                                    </Button>

                                    {/* Forgot Password button */}
                                    <Button type="button" onClick={handleForgotPasswordClick} className="btn btn-link">
                                        I Forgot My Password
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login2;
