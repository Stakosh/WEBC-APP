import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Inicio from './components/Inicio.js';
import Noticias from './components/Noticias';
import Login from './components/Login';
import ContactList from './ContactList.jsx';




function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts")
    const data = await response.json()
    setContacts(data.contacts)
    console.log(data.contacts)
  }



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