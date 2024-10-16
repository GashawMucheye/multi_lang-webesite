import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import About from './About'; // Adjust the import path as necessary
import Gallery from './Gallery'; // Adjust the import path as necessary
import Contact from './Contact'; // Adjust the import path as necessary

const Home = () => {
  const { t } = useTranslation('common');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center p-6 min-h-screen hero-section">
        <h1 className="text-4xl font-bold text-white-800 mb-4">
          {t('welcome')}
        </h1>
        <p className="text-white-700 mb-6">{t('introduction')}</p>
        {/* <div className="flex flex-col space-y-4 md:flex-row md:justify-center md:items-center md:gap-3"> */}
        <div className="flex flex-col space-y-4">
          <Link
            to="/about"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-5 mx-4"
          >
            {t('about')}
          </Link>
          {/* <Link
            to="/gallery"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {t('gallery')}
          </Link> */}
          <Link
            to="/contact"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
          >
            {t('contact')}
          </Link>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
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
