import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Inicio from './components/Inicio.js';
import Noticias from './components/Noticias';


function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Inicio />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
 }

export default App;
