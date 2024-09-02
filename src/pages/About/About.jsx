import React from 'react';

const About = () => {
  return (
    <div className='About-container bg-gray-50 py-12 mt-24'>
      <div className="main-about max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
        
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-gray-900">Zuberiya Global</span>, we are passionate about bringing the timeless elegance and rich cultural heritage of Pakistani fashion to women around the world. Our mission is to offer a curated collection of the finest Pakistani suits, designed to make every woman feel beautiful, confident, and stylish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Daily Wear Suits</h2>
            <p className="text-gray-600">
              Discover our collection of comfortable yet stylish daily wear suits, perfect for everyday elegance.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Party Wear Suits</h2>
            <p className="text-gray-600">
              Stand out at any event with our sophisticated and trendy party wear suits, designed to make you the center of attention.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Wedding Suits</h2>
            <p className="text-gray-600">
              Celebrate love and tradition with our exquisite wedding suits, featuring intricate embroidery, luxurious fabrics, and stunning designs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Heavy Suits</h2>
            <p className="text-gray-600">
              Make a statement with our heavy suits, crafted for those special occasions that demand nothing but the best.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Join us at <span className="font-semibold text-gray-900">Zuberiya Global</span> in celebrating the beauty of Pakistani fashion. We are honored to be a part of your style journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
