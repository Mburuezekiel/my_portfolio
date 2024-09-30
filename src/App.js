import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificateViewer from './components/CertificateViewer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <About />
        {/* Render Skills directly here so it is always visible */}
        <Skills /> 
        <Routes>
          <Route path="/certificate/:id" element={<CertificateViewer />} />
          <Route path="/" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
