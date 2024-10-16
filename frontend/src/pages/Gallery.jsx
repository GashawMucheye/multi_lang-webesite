import React from 'react';

const Gallery = () => {
  const images = [
    ' https://images.unsplash.com/photo-1510382684496-dda106e3f86a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D',
    ' https://images.unsplash.com/photo-1510382684496-dda106e3f86a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D',
    ' https://images.unsplash.com/photo-1510382684496-dda106e3f86a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D',
    ' https://images.unsplash.com/photo-1510382684496-dda106e3f86a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D',
    ' https://images.unsplash.com/photo-1510382684496-dda106e3f86a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D',
    ' https://images.unsplash.com/photo-1510382684496-dda106e3f86a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D',
    ' https://images.unsplash.com/photo-1510382684496-dda106e3f86a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D',
    ' https://images.unsplash.com/photo-1510382684496-dda106e3f86a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D',
  ];

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
