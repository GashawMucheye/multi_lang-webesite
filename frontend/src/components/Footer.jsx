import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <section className="mx-auto container bg-slate-600 p-2 border border-green-400">
      <div className="flex justify-center space-x-4">
        <FaFacebook className="text-blue-600" />
        <FaInstagram className="text-red-400" />
      </div>

      <p className="text-center">&copy;{t('footerContent')}</p>
    </section>
  );
};

export default Footer;
