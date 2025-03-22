import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Featured from './components/featured';
import Shop from './components/shop';
import About from './components/about';
import Contact from './components/Contact';
import Sample from './components/sample';
import Footer from './components/footer';
import Testimonials from './components/testimonials';
import FAQs from './components/faqs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      {/* Navbar will be displayed on all pages */}
      <Navbar />
      

      {/* Define routes for different pages */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Featured />
              <Sample />
              <Testimonials />
              
            </>
          }
        />
        {/* Shop Page */}
        <Route path="/shop" element={<Shop />} />
        {/* About Page */}
        <Route path="/about" element={<About />} />
        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        <Route path="/faqs" element = {<FAQs />}/>
        <Route path="/login" element = {<Login />}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
