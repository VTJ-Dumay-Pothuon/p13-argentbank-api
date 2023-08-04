import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'

import Header from './components/Header'
import Footer from './components/Footer'

import './styles/main.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
