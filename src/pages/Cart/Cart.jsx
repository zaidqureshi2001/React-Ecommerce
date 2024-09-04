import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../Redux/Cartslice';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    function handleRemove(id) {
        dispatch(remove(id))
    }

    return (
        <div className='mt-48 max-w-3xl mx-auto p-4'>
            <h1 className='text-3xl font-semibold mb-8 text-center'>Shopping Cart</h1>
            {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <div
                        key={index}
                        className='main flex items-center gap-6 p-4 mb-4 bg-white shadow-lg rounded-lg'
                    >
                        <img
                            src={item.Image}
                            alt={item.name}
                            className='w-24 h-24 object-cover rounded'
                        />
                        <div className='flex-grow'>
                            <h2 className='text-xl font-semibold text-gray-800'>{item.name}</h2>
                            <p className='text-lg text-green-600'>₹{item.price}</p>
                        </div>
                        <button onClick={() => handleRemove(item.id)}
                            className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
                        >
                            Remove
                        </button>
                    </div>
                ))
            ) : (
                <p className='text-center text-gray-500'>Your cart is empty</p>
            )}
        </div>
    );
}

export default Cart;
