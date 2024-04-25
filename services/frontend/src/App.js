import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Inicio from './components/Inicio.js';
import Noticias from './components/Noticias';
import Login2 from './components/Login2';



function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Login2 />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/login2" element={<Login2 />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
 }

export default App;