/*
Página de Home, se muestra después de iniciar sesión
- Da un mensaje de bienvenida y permite navegar a las otras páginas
- Opciones de navegación:
- DashboardUsuariosTareas
- DashboardTareas
- DashboardProyectos
- DashboardMisTareas
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../utils/api';
import styles from '../styles.css';


const Home = () => {
    const navigate = useNavigate();
    const user_id = localStorage.getItem('user_id');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {
        const fetchUser = async() => {
            const res = await api.getUsuario(user_id);
            if (res.status === 200) {
                const data = await res.json();
                setEmail(data.correo);
            }
            else {
                alert("Error al cargar recursos");
            }
        }
        fetchUser();
    }, [user_id]);


    const Logout = async(e) => {
        e.preventDefault();
        const res = await api.logout();
        if (res.status === 200) {
            localStorage.removeItem('user_id');
            localStorage.removeItem('token');
            // refresh page
            window.location.reload(false);
        }
        else {
            alert("Error al cargar recursos");
        }
    }

    const openDashboardUsuariosTareas = () => {
        navigate('/usuarios-tareas');
    }

    const openDashboardTareas = () => {
        navigate('/tareas');
    }

    const openDashboardMisTareas = () => {
        navigate('/mis-tareas');
    }

    const openDashboardProyectos = () => {
        navigate('/proyectos');
    }





    return (
        <div className="container">
            <div className="row">
                <div className="login col-md-6 offset-md-3 mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h3>Bienvenido {email}</h3>
                        </div>
                        <div className="card-body">
                            <h4>¿Qué deseas hacer?</h4>
                            <button type="submit" className="action-button btn-primary" onClick={openDashboardUsuariosTareas}>Gestión de usuarios y tareas</button>
                            <br/>
                            <button type="submit" className="action-button btn-primary" onClick={openDashboardTareas}>Gestión de tareas</button>
                            <br/>
                            <button type="submit" className="action-button btn-primary" onClick={openDashboardMisTareas}>Ver mis tareas</button>
                            <br/>
                            <button type="submit" className="action-button btn-primary" onClick={openDashboardProyectos}>Gestión de proyectos</button>
                            <br/>
                            <button type="submit" className="action-button btn-primary" onClick={Logout}>Cerrar sesión</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home;