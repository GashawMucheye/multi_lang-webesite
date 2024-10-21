import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // Adjust the path as needed

const Navbar = () => {
  const { t } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    // document.documentElement.dir = selectedLanguage === 'he' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    // Set initial text direction based on the default language
    document.documentElement.dir = i18n.dir();
    // i18n.language === 'he' || i18n.language === 'am' ? 'rtl' : 'ltr';
    // i18n.language === 'he' || i18n.language === 'am' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* <div className="text-white text-lg font-semibold">Photographer</div> */}
        <Link to={'/'} className="text-white text-lg font-semibold">
          Photographer
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <NavLink
              to="/"
              className="hover:text-gray-300"
              activeClassName="font-bold"
            >
              {t('home')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-gray-300"
              activeClassName="font-bold"
            >
              {t('about')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className="hover:text-gray-300"
              activeClassName="font-bold"
            >
              {t('gallery')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-gray-300"
              activeClassName="font-bold"
            >
              {t('contact')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/testimonials"
              className="hover:text-gray-300"
              activeClassName="font-bold"
            >
              {t('testimonials')}
            </NavLink>
          </li>
        </ul>

        {/* Language Selector */}
        <div className="flex items-center space-x-4 text-white">
          <label htmlFor="language-select" className="mr-2">
            {t('language')}:
          </label>
          <select
            id="language-select"
            onChange={handleLanguageChange}
            className="bg-blue-600 text-white border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            defaultValue={i18n.language}
          >
            <option value="en">English</option>
            <option value="am">አማርኛ</option>
            <option value="he">עברית</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-blue-600 text-white space-y-2 mt-2 p-4">
          <li>
            <NavLink
              to="/"
              className="block hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('home')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="block hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('about')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className="block hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('gallery')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="block hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/testimonials"
              className="block hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('testimonials')}
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
