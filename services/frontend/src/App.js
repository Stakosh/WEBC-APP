import React from 'react';
import Login from './components/Login';
import Inicio from './components/Inicio';
//import Layout from './components/LayoutLogin';

//import Home from "./components/Home";
//import Justificaciones from "./components/Justificaciones";
//import Asistencia from "./components/Asistencia";
//import ProximosCursos from "./components/ProximosCursos";

function App() {
  const isLoggedIn = localStorage.getItem('token') !== null;
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={isLoggedIn ? <Inicio/> : <Login />} />
      <Route path="/usuarios-tareas" element={isLoggedIn ? <Inicio/> : <Login />} />
      <Route path="/tareas" element={isLoggedIn ? <Inicio/> : <Login />} />
      <Route path="/mis-tareas" element={isLoggedIn ? <Inicio/> : <Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;