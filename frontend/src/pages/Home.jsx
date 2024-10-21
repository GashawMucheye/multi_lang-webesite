import React from 'react';
import { useTranslation } from 'react-i18next';
import About from './About'; // Adjust the import path as necessary
import Gallery from './Gallery'; // Adjust the import path as necessary
import Contact from './Contact'; // Adjust the import path as necessary
import Testimonials from './Testimonials';
import AddTestimonial from '../components/AddTestimonial';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation('common');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center p-6 min-h-screen hero-section">
        <h1 className="text-4xl font-bold text-white-800 mb-4">
          {t('welcome')}
        </h1>
        <p className="text-white-700 mb-6">{t('introduction')}</p>
        <div className="flex flex-col space-y-4 md:flex-row md:justify-center md:items-center md:space-x-3">
          <div className="flex flex-col md:flex-row">
            <button
              className="btn btn-outline btn-primary my-3 md:mx-3 "
              onClick={() => {
                navigate('/about');
              }}
            >
              {t('about')}
            </button>
            <button
              className="btn btn-outline btn-primary my-3 md:mx-3"
              onClick={() => {
                navigate('/contact');
              }}
            >
              {t('contact')}
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <AddTestimonial />
      <Testimonials />
      <Contact />

      {/* Scroll to Top Button */}
      <div className="flex justify-center mt-8 mb-4">
        <button
          onClick={scrollToTop}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-11 fixed bottom-1 right-4"
        >
          {t('backToTop')}
        </button>
      </div>
    </div>
  );
};

export default Home;
