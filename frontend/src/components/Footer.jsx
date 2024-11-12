import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <section className="mx-auto container bg-slate-600 p-2 border border-green-400">
      <div className="flex justify-center space-x-4">
        <a
          href="https://he-il.facebook.com/login/device-based/regular/login"
          target="_blank"
        >
          <FaFacebook className="text-blue-600" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <FaInstagram className="text-red-400" />
        </a>
      </div>

      <p className="text-center">&copy;{t('footerContent')}</p>
    </section>
  );
};

export default Footer;
