import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import prdct from '../../assets/allProducts/all_Products';
import ProductPanel from './ProductPanel';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const allProducts = prdct.flatMap(category => Object.values(category)).flat();
    const selectedProduct = allProducts.find(p => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <div>Loading...Product</div>;

  return (
    <div className="container mx-auto mt-16 p-6">
      <ProductPanel />
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Product Image Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center mb-6 md:mb-0">
          <img 
            src={product.Image} 
            alt={product.name} 
            className="w-96 h-96 rounded-lg shadow-lg "
          />
        </div>

        {/* Product Information Section */}
        <div className="w-full md:w-1/2 lg:w-2/3">
          <h1 className="text-4xl font-semibold mb-4">{product.name}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-green-600 mb-6">Price: ₹{product.price}</p>

          {/* Purchase Options */}
          <div className="flex flex-col space-y-4">
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
              Add to Cart
            </button>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
