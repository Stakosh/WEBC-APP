import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Inicio from './components/Inicio.js';
import Noticias from './components/Noticias';
import Login from './components/Login';



function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/inicio" element={<Inicio />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
 }

export default App;