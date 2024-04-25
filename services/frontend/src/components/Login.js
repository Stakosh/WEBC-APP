import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'; // Importing your custom CSS

function Login() {
    return (
        <div className="login-container bg-primary vh-100 d-flex justify-content-center align-items-center">
            <div className="login-box bg-white p-4 rounded">
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" className="form-control rounded-0" id="email" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter password" className="form-control rounded-0" id="password" required/>
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0 mb-3">Log in</button>
                    <button type="button" className="btn btn-light border w-100 rounded-0">Create Account</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
