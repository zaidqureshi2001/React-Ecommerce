import React from 'react';
import smallData from '../../assets/datat';
import Items from './Items/Items';
import Line from './Line';

const Popular = () => {
  return (
    <div className="popular-container ">
<Line/>
      <div className="flex flex-wrap justify-around p-4 m-5 h-full ">
        {smallData.map((item, i) => (
          <div key={i} className="w-full h-full  sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <Items id={item.id} name={item.name} image={item.image} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
