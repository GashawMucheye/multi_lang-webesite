import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <section className="mx-auto container bg-slate-600 p-2">
      <p className="text-center">&copy;{t('footerContent')}</p>
    </section>
  );
};

export default Footer;
