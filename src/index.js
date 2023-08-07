import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'

import Header from './components/Header'
import Footer from './components/Footer'

import './styles/main.css';

const store = configureStore({
  reducer: rootReducer, // Passez le rootReducer ici
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);