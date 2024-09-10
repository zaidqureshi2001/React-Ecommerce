import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, increment, decrement } from '../../Redux/Cartslice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleIncrement = (id) => {
    dispatch(increment(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="mt-20 mx-auto max-w-6xl p-6">
      {cartItems.length > 0 ? (
        <>
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start border-t border-gray-200 p-4 mb-4 bg-white shadow-sm"
                >
                  <img
                    src={item.Image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                  />
                  <div className="ml-6 flex-grow space-y-2">
                    <h2 className="text-lg font-medium text-gray-900">{item.name}</h2>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="text-lg font-bold text-gray-900">₹{item.price}</p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDecrement(item.id)}
                        className="bg-gray-100 border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrement(item.id)}
                        className="bg-gray-100 border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-sm text-blue-500 hover:text-blue-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-1 bg-white p-6 border border-gray-200 shadow-sm rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="flex justify-between text-sm text-gray-700">
                <span>Subtotal</span>
                <span>₹{calculateSubtotal()}</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                The price and availability of items are subject to change.
              </p>
              <button className="w-full bg-orange-500 text-white py-3 mt-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Proceed to Buy
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-20">
          <h1 className="text-2xl font-semibold mb-4">Your cart is empty</h1>
          <p className="text-gray-600">Browse our products and add items to your cart.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
