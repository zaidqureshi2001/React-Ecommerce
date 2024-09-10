import React from 'react';
import smallData from '../../assets/datat';
import Items from './Items/Items';
import Line from './Line/Line';

const Popular = () => {
  return (
    <div className="popular-container ">
      <Line name="Top Collection" />
      <div className="flex flex-wrap justify-around p-4 m-5 h-full ">
        {smallData.map((item, i) => (
          <div key={i} className="w-full h-full  sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <Items id={item.id} name={item.name} image={item.Image} price={item.price} />
          </div>
        ))}
        <button className="bg-pink-500  w-2/4  mt-5 text-white py-2 px-4 rounded hover:bg-pink-700 w-full"
        >View all</button>
      </div>
    </div>
  );
};

export default Popular;
