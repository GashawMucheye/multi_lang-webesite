import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeChange } from '../contextApi/ContextProvider';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
const Contact = () => {
  const { t } = useTranslation('common');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('http://localhost:3000/api/sendMessage', {
      name,
      email,
      phone,
      message,
      subject,
    });
    console.log(response);
    toast.success('message sent successfully');
    setName('');
    setEmail('');
    setMessage('');
    setPhone('');
  };
  const { isDark, changeColor } = useContext(ThemeChange);

  // flex items-center justify-center p-6 container mx-auto  border-green-600 min-h-screen
  return (
    <div
      className={
        isDark
          ? 'bg-gray-100 flex items-center justify-center p-6 container mx-auto  border-green-600 min-h-[400px] py-12 '
          : 'bg-slate-600 flex items-center justify-center p-6 container mx-auto  border-green-600 min-h-[400px]'
      }
    >
      <div className="shadow-md rounded-lg p-8 max-w-lg w-full my-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {t('contactUs')}
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              {t('name')}
            </label>
            <input
              type="text"
              value={name}
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t('yourName')}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              {t('email')}
            </label>
            <input
              type="email"
              value={email}
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t('yourEmail')}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              {t('phone')}
            </label>
            <input
              type="text"
              value={phone}
              id="phone"
              name="phone"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t('yourPhone')}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Subject Field */}
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-medium mb-2"
            >
              {t('subject')}
            </label>
            <input
              type="text"
              value={subject}
              id="subject"
              name="subject"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t('subjectPlaceholder')}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              {t('message')}
            </label>
            <textarea
              id="message"
              value={message}
              name="message"
              className="w-full p-3 h-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t('yourMessage')}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {t('sendMessage')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
