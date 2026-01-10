import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import Ecommerce from './pages/Ecommerce';
import AppDevelopment from './pages/AppDevelopment';
import TopProjects from './pages/TopProjects';
import Career from './pages/Career';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-primary bg-bg-light">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/app-development" element={<AppDevelopment />} />
            <Route path="/top-projects" element={<TopProjects />} />
            <Route path="/portfolio" element={<Navigate to="/top-projects" replace />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
