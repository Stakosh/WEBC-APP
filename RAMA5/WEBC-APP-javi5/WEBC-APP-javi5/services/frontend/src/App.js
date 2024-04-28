import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Inicio from './components/Inicio.js';
//import Noticias from './components/Noticias';
import Login from './components/Login';
//import { AuthProvider } from './components/AuthContext';
import ProximosCursos from './components/ProximosCursos';
import Justificaciones from './components/Justificaciones';
import Asistencias from './components/Asistencias.js';
import NewRegister from './components/NewRegister.js';
//import ProtectedRoute from './components/ProtectedRoute';


function App() {
    
    fetch('http://localhost:5000/add_example', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    .then(response => response.json())
    .then(data => {
            console.log('Success:', data);
            alert(data.message);  // Display a message to the user
        })
    .catch((error) => {
            console.error('Error:', error);
            alert('Failed to create example user');
        });
    
  
    return (
        <Router>
                <div className="App">
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/new" element={<NewRegister />} />
                            <Route path="/inicio" element={<Inicio/>} />
                            <Route path="/justificaciones" element={<Justificaciones/>} />
                            <Route path="/asistencias" element={<Asistencias/>} />
                            <Route path="/cursos" element={<ProximosCursos />} />
                            <Route path="/new" element={<NewRegister />} />
                        </Routes>
                    </Layout>
                </div>
        </Router>
    );
}

export default App;
