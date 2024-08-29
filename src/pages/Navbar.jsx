import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CgClose, CgMenu } from 'react-icons/cg';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }

    return (
        <div className='Navbar fixed inset-0 z-50'>
            {/* Top Bar */}
            <div className='bg-black text-white w-full flex justify-center items-center py-2'>
                <p>Shipping World Wide</p>
            </div>

            {/* Main Navbar */}
            <div className="nav-list flex  justify-center md:justify-between items-center  px-8 bg-white shadow-md">
                <div className="logo text-xl font-bold">
                    <p>Zaid Shop</p>
                </div>
                {/* Mobile Menu */}
                <div className={`absolute w-full h-screen z-10 items-center top-0 left-0 w-full bg-white  overflow-hidden transition-transform durantion-1000 ease-in-out transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
                    <ul className='flex flex-col items-center gap-6 justify-center text-lg font-medium h-full w-full '>
                        <li><Link to='/' className="hover:text-gray-600" onClick={toggle}>Home</Link></li>
                        <li><Link to='/Product' className="hover:text-gray-600" onClick={toggle}>Products</Link></li>
                        <li><Link to='/About' className="hover:text-gray-600" onClick={toggle}>About</Link></li>
                        <li><Link to='/Contact' className="hover:text-gray-600" onClick={toggle}>Contact</Link></li>
                    </ul>
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className='flex gap-8 text-lg font-medium'>
                        <li><Link to='/' className="hover:text-gray-600">Home</Link></li>
                        <li><Link to='/Product' className="hover:text-gray-600">Products</Link></li>
                        <li><Link to='/About' className="hover:text-gray-600">About</Link></li>
                        <li><Link to='/Contact' className="hover:text-gray-600">Contact</Link></li>
                    </ul>
                </div>
                {/* Search and Cart */}
                <div className="navsearch flex items-center gap-4 ml-6">
                    <input
                        type="text"
                        placeholder='Search'
                        className="px-4 py-2 mb-4 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                    <Link to="/cart" className="text-xl hover:text-gray-600 mb-4">
                        <FaShoppingCart />
                    </Link>
                    {/* Hamburger Menu for Mobile */}

                    <div className="menu-btns text-3xl md:hidden z-50 mb-4 cursor-pointer" onClick={toggle}>
                        {isOpen ? <CgClose /> : <CgMenu />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
