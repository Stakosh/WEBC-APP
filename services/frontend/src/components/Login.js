/*
Login:
Permite al usuario iniciar sesión en la aplicación
Almacena el token y el id del usuario en el almacenamiento local en caso de que las credenciales sean correctas
*/


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles.css';

const Login = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="login col-md-6 offset-md-3 mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h3>Inicia sesión</h3>
                        </div>
                        <div className="card-body">
                            <form className='form-login' onSubmit={SetData}>
                                <div className="form-group">
                                    <label htmlFor="email">Correo electrónico</label>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Contraseña</label>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <button type="submit" className="login-btn btn-primary">Iniciar sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;