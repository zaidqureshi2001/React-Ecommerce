import React from 'react';
import prdct from '../../assets/allProducts/all_Products';
import { add } from '../../Redux/Cartslice';
import { useDispatch } from 'react-redux';

const ProductCard = () => {
  const dispath = useDispatch()
  function handleadd(product) {
    dispath(add(product))
  }
  return (
    <div className='All_Products mt-12 px-4 mt-48'>
      <div className='products_Item flex flex-wrap gap-6  justify-center'>
        {
          prdct[0].pak.map((e, index) => (
            <div
              key={index}
              className="product bg-white shadow-lg rounded-lg overflow-hidden w-80 cursor-pointer"
            >
              <img
                src={e.Image}
                alt={e.name}
                className='w-90 h-90 object-cover'
              />
              <div className='p-4 '>
                <h2 className='text-xl font-semibold text-gray-800 mb-2'>{e.name}</h2>
                <div className='flex items-center justify-between'>
                  <span className='text-lg font-bold text-green-600'>₹{e.price}</span>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600' onClick={() => handleadd(e)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductCard;
