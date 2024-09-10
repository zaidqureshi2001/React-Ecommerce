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
      // <h1 className="text-3xl font-semibold mb-8 text-center">Shopping Cart</h1>
    <div className="mt-40 mx-auto p-4 ">
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="main flex ml-10 items-center w-3/5 gap-6 p-4 mb-4 bg-white shadow-lg rounded-lg"
            >
              <img
                src={item.Image}
                alt={item.name}
                className="w-40 h-40 object-cover rounded"
              />
              <div className="flex-grow  items-center">
                <h2 className="text-xl ml-4 font-semibold text-gray-800">{item.name}</h2>
                <p className='text-xs text-gray-800 p-3 '>{item.description}</p>
                <p className="text-lg text-green-600">Price:₹{item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="bg-gray-300 text-black px-2 py-1 rounded"
                >
                  -
                </button>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="bg-gray-300 text-black px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
              </div>
            </div>
          ))}
        <div className='fixed top-40 right-40 border p-10 bg-white shadow-lg rounded-lg'>
        <div className=" text-lg font-semibold">
            Subtotal: ₹{calculateSubtotal()}
          </div>
          <div className="bg-blue-500 p-3 text-white  hover:bg-blue-900 mt-5 text-lg font-semibold rounded-xl">
            <button>Proceed To Pay</button>
          </div>
        </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
