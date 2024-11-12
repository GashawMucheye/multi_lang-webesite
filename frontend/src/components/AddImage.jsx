import React, { useState } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const AddImage = () => {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    image: '',
    category: null,
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
    data.append('slug', formData.slug);
    data.append('category', formData.category);
    data.append('image', formData.image);

    try {
      const response = await axios.post(
        'http://localhost:3000/api/gallery',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Image details added successfully:', response.data);
      toast.success('Image details added successfully');
    } catch (error) {
      console.error('Error adding image details:', error);
      toast.error('Failed to add image details');
    }
  };

  return (
    <div className="bg-gray-100 p-6 max-w-md mx-auto rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add an Image</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            name
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
          <label htmlFor="slug" className="block text-gray-700 font-medium">
            slug
          </label>
          <input
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-medium">
            Category
          </label>
          <input
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-medium">
            Image
          </label>
          <div>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default AddImage;
