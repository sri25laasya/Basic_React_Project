import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'; // Make sure the file name and path match your project structure
import Contact from './contact'; // Make sure the file name and path match your project structure
import Why from './why';
import Trainer from './trainer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/why" element={<Why />} />
        <Route path="/trainer" element={<Trainer />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
