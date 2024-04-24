import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Login from './components/Login.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout/>
            <Route path="/" element={<Login />} />
      </div>
    </Router>
  );
 }

export default App;
