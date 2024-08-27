import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar '>
            {/* Top Bar */}
            <div className='bg-black text-white w-full flex justify-center items-center'>
                <p>Shipping World Wide</p>
            </div>

            {/* Main Navbar */}
            <div className="nav-list flex justify-between items-center h-16 px-8 bg-white-80 ">
                <div className="logo text-xl font-bold">
                    <p>Zaid shop</p>
                </div>
                <div className="items ">
                    <ul className='flex gap-8 text-lg font-medium no-underline'>
                        <li><Link to='/' className="hover:text-gray-600">Home</Link></li>
                        <li><Link to='/Product' className="hover:text-gray-600">Products</Link></li>
                        <li><Link to='/About' className="hover:text-gray-600">About</Link></li>
                        <li><Link to='/Contact' className="hover:text-gray-600">Contact</Link></li>
                    </ul>
                </div>
                <div className="navsearch flex items-center gap-4">
                    <input 
                        type="text" 
                        placeholder='Search'
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                    <Link to="/cart" className="text-xl hover:text-gray-600">
                        <FaShoppingCart />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
