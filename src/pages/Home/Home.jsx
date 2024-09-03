import React from 'react';
import './Home.css';
import Carouselsall from './Carouselsall';
import image2 from '/src/assets/images/image2.jpeg';
import image3 from '/src/assets/images/image3.jpeg';
import image4 from '/src/assets/images/image4.jpeg';
import image5 from '/src/assets/images/image5.jpeg';
import image6 from '/src/assets/images/image6.jpeg';
import image7 from '/src/assets/images/image7.jpeg';
import image8 from '/src/assets/images/image8.jpeg';
import Popular from './Popular';
import Newr from './Newr';
import Line from './Line/Line';
import Trending from './Trending';
import Banners from './Banners/Banners';

const Home = () => {
  const firstCarousel = [
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
    <div className='mt-24'>
      <div className='Home flex justify-around items-center h-screen'>
        <div className="left-home md:px-9">
          <h1 className='font-bold mb-6 text-animation-title md:text-6xl text-4xl'>
            Welcome to Zuberiya Global
          </h1>
          <p className='text-animation-description font-playfair'>
            Discover the latest in fashion, curated just for you.
            Whether you're looking for the perfect dress, stylish accessories, or everyday essentials, we've got you covered.
            Step into a world of elegance, sophistication, and timeless beauty.
            Shop with us and embrace the fashionista within you.
          </p>
          <button className='Homebtn bg-white text-pink-600 p-4 mt-4 rounded-2xl font-bold text-xl shadow-lg transition-transform duration-300 ease-in-out hover:bg-white hover:text-black hover:shadow-xl hover:-translate-y-1 cursor-pointer'>
            Latest Arrival
          </button>
        </div>

        <div className='Second-Carousel'>
          <Carouselsall newimg={firstCarousel} />
        </div>
      </div>

      <div className='Home-Allcom'>
        <Newr />
        <Line name2="Trending Now" />
        <Trending />
        <Banners />
        <Popular />
      </div>
    </div>
  );
};

export default Home;
