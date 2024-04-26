import React, { useState } from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import ImgFondo from '../img/fondo-1.jpg'; // Make sure the path is correct
import { useAuth } from '../AuthContext'; // Import useAuth hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import NewRegister from './NewRegister';



function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(''); // State to handle error messages
    const { login } = useAuth();
    const navigate = useNavigate(); // useNavigate hook for redirection

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError(''); // Reset error message on input change
    };

    // Handle form submission
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await login(formData.email, formData.password);
            navigate('/inicio'); // Navigate to '/inicio' on successful login
        } catch (error) {
            setError('Invalid email or password'); // Set error message on login failure
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
