import React from 'react';
import prdct from '../../assets/allProducts/all_Products';
import { add } from '../../Redux/Cartslice';
import { useDispatch } from 'react-redux';

const ProductCard = () => {
  const dispatch = useDispatch();

  function handleAdd(product) {
    dispatch(add(product));
  }

  return (
    <div className="All_Products px-4 mt-40">
      <div className="products_Item p-5 flex flex-wrap justify-around items-center">
        {/* Loop through all categories */}
        {Object.keys(prdct[0]).map((category) =>
          prdct[0][category].map((e, index) => (
            <div
              key={index}
              className="product my-7  p-3 shadow-lg rounded-lg overflow-hidden w-64 h-5/6 cursor-pointer"
            >
              <div className="image-container">
                <img
                  src={e.Image}
                  alt={e.name}
                  className="product-image w-full h-72 object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-sm font-bold text-gray-800 mb-2">{e.name}</h2>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">₹{e.price}</span>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => handleAdd(e)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductCard;
