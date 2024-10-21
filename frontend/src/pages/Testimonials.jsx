import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation('common');
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/testimonials')
      .then((response) => setTestimonials(response.data))
      .catch((error) => console.error('Error fetching testimonials:', error));
  }, []);

  return (
    <div className="py-8 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        {t('testimonials')}
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial._id}
            className="bg-white p-6 rounded-lg shadow-md flex items-center"
          >
            <img
              src={`http://localhost:3000/${testimonial.imageUrl}`}
              // src={`https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.webp?a=1&b=1&s=612x612&w=0&k=20&c=tStWgNSFBAGPyu4gfJfDEjqMPDnvgqWUkIPyZYGS090=`}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-700">{testimonial.content}</p>
              <p className="text-yellow-500">
                {'★'.repeat(testimonial.rating)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
