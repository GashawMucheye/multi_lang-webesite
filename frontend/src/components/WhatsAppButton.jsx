import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '1234567890'; // Replace with your WhatsApp number
  const message = 'Hello!%20I%20need%20help.'; // Customize the message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-9 left-6 bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-xl transition-all duration-300 ease-in-out z-50"
        title="Click to chat with us on WhatsApp!"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12 md:w-10 md:h-10 sm:w-8 sm:h-8"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
