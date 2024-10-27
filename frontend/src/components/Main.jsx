import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import Testimonials from '../pages/Testimonials';

const Main = () => {
  return (
    <section className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </section>
  );
};

export default Main;
