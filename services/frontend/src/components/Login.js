import React, { useState } from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import ImgFondo from '../img/fondo-1.jpg'; // Make sure the path is correct
import { useNavigate } from 'react-router-dom'; // Import useNavigate


function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            // Here we're using POST to send the login details to the backend
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
                navigate('/dashboard'); // Navigate to the dashboard upon successful login
            } else {
                console.error('Login failed:', data.error);
                alert(data.error || 'Invalid credentials'); // Provide feedback for failed login
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Error during login. Please try again.');
        }
    };

    // Placeholder handlers for other functionalities
    const handleRegisterClick = () => {
        console.log('New register clicked');
        navigate('/new');
    };

    const handleForgotPasswordClick = () => {
        console.log('Forgot password clicked');
    };

    return (
        <div style={{ backgroundImage: `url(${ImgFondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Container>
                <Row>
                    <Col md={4} className="offset-md-4 mt-5">
                        <div className="login-box bg-white p-4 rounded shadow-lg">
                            <h2 className="text-center">Login</h2>
                            <Form onSubmit={handleFormSubmit}> {/* Use handleFormSubmit instead of handleLogin */}
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

                                <div className="mt-3 d-flex justify-content-between">
                                    <Button type="button" onClick={handleRegisterClick} className="btn btn-link">
                                        New Register
                                    </Button>
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

export default Login;
