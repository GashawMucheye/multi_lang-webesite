import React, { useState } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
// import { useTranslation } from 'react-i18next';

const AddTestimonial = () => {
  // const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    rating: 1,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle the file upload
    const data = new FormData();
    data.append('name', formData.name);
    data.append('content', formData.content);
    data.append('rating', formData.rating);
    data.append('image', formData.image);

    try {
      const response = await axios.post(
        'http://localhost:3000/api/testimonials',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Testimonial added successfully:', response.data);
      toast.success('Testimonial added successfully');
    } catch (error) {
      console.error('Error adding testimonial:', error);
    }
  };

  return (
    <div className="bg-gray-100 p-6 max-w-md mx-auto rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add a Testimonial</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-medium">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 font-medium">
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-medium">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit Testimonial
        </button>
      </form>
    </div>
  );
};

export default AddTestimonial;
