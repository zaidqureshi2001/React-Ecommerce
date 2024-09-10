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
    <div className="mt-32 p-6">
        <ProductPanel/>
      <div className="flex">
        <img src={product.Image} alt={product.name} className="w-1/3 h-auto rounded-lg" />
        <div className="ml-6">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-xl font-bold text-green-600 mb-6">Price: ₹{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
