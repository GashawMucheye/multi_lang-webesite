import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeChange } from '../contextApi/ContextProvider';

const Gallery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isDark, changeColor } = useContext(ThemeChange);
  const { t } = useTranslation('common');

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('http://localhost:3000/api/gallery');
        setLoading(false);
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchGallery();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div
      className={
        isDark
          ? 'bg-gray-100 py-12 px-6 md:px-12 lg:px-24 container mx-auto  border-green-600'
          : 'py-12 px-6 md:px-12 lg:px-24 container mx-auto  border-green-600 bg-slate-600 '
      }
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {t('gallery')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={`http://localhost:3000/${item.imageUrl}`}
                alt={item.title}
                className="object-cover"
              />
              <div className="text-white">{item.title}</div>
              <div className="text-white">{item.category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
