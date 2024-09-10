import React from 'react'
import { useDispatch } from 'react-redux'
import prdct from '../../assets/allProducts/all_Products'
import ProductPanel from './ProductPanel'
import { Link } from 'react-router-dom'

const Georgette = () => {
  const dispatch = useDispatch()
  const georgette = prdct[0].Georgette || []
  function handleAdd(product) {
    dispatch(add(product))
  }
  return (
    <div className="Cotton_Products px-4 mt-32 font-playfair">
      <ProductPanel />
      <div className="products_Item p-5 flex flex-wrap justify-around items-center">
        {georgette.map((product, index) => (
          <div
            key={index}
            className="product my-7 p-3 shadow-lg rounded-lg overflow-hidden w-64 h-5/6 cursor-pointer"
          >
            <Link to={`/product/${product.id}`}>
              <div className="image-container">
                <img
                  src={product.Image}
                  alt={product.name}
                  className="product-image w-full h-72 object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Link>
            <div className="p-4">
              <h2 className="text-sm font-bold text-gray-800 mb-2">{product.name}</h2>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-green-600">₹{product.price}</span>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => handleAdd(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>)
}

export default Georgette