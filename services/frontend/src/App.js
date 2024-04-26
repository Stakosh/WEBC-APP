import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Import AuthProvider
import Layout from './components/Layout.js';
import Inicio from './components/Inicio.js';
import Noticias from './components/Noticias';
import Login from './components/Login';
import ProximosCursos from './components/ProximosCursos';
import Justificaciones from './components/Justificaciones';
import Asistencias from './components/Asistencias.js';
import NewRegister from './components/NewRegister.js';


function App() {
    return (
        <Router>
            <AuthProvider> {/* Wrap everything within AuthProvider */}
                <div className="App">
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/noticias" element={<Noticias />} />
                            <Route path="/inicio" element={<Inicio />} />
                            <Route path="/justificaciones" element={<Justificaciones/>} />
                            <Route path="/asistencias" element={<Asistencias/>} />
                            <Route path="/cursos" element={<ProximosCursos />} />
                            <Route path="/new" element={<NewRegister />} />
                        </Routes>
                    </Layout>
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
