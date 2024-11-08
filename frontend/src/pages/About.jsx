import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
const About = () => {
  const { t } = useTranslation('common');

  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 container mx-auto  border-green-600 bg-slate-600">
      <div className="max-w-5xl mx-auto rounded-lg shadow-lg overflow-hidden lg:flex lg:items-center">
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1495580621852-5de0cc907d2f?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the photographer's image
            alt={t('aboutImageAlt')}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t('aboutTitle')}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 * 0.1 }}
            className="text-gray-700 mb-4"
          >
            {t('aboutDescription1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 * 0.1 }}
            className="text-gray-700 mb-4"
          >
            {t('aboutDescription2')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 * 0.1 }}
            className="text-gray-700 mb-4"
          >
            {t('aboutDescription3')}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
