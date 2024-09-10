import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Items = (props) => {
  return (
    <div className='flex flex-col w-full h-full bg-green-100 shadow-lg rounded-lg overflow-hidden'>
      <div className='flex-shrink-0 h-full'>
      <Link to={`/product/${props.id}`}>
      <img src={props.image} alt={props.name} className='w-full h-96 object-cover cursor-pointer  ' />
        </Link>
      <div className='bg-[#f3f3f3] p-4 flex flex-col'>
        <h2 className='font-bold text-lg mb-2 font-playfair'>{props.name}</h2>
        <p className='text-gray-700 mt-auto text-xl'>₹{props.price}</p>
      </div>
      </div>
    </div>
  );
};

export default Items;
