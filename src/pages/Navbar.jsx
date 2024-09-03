import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaShoppingBag } from 'react-icons/fa';
import { CgClose, CgMenu } from 'react-icons/cg';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { useSmoothNavigate } from '../useSmoothNavigate';
import './Navbar.css'

const Navbar = () => {
    const navigate = useSmoothNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='Navbar fixed inset-0 z-50 font-playfair'>
            {/* Top Bar */}
            <div className='bg-black text-white w-full flex justify-center items-center py-2'>
                <p>Shipping World Wide</p>
            </div>

            {/* Main Navbar */}
            <div className=" navfirst flex justify-center md:justify-between items-center px-8 bg-white shadow-md">
                {/* Logo */}
                <div className=" Navar-logo logo flex items-center text-xl font-bold text-pink-500 cursor-pointer">
                    <FaShoppingBag className="mr-2 text-2xl" />
                    <span>Zuberiya Global</span>
                </div>

                {/* Mobile Menu */}
                <div className={`absolute w-full h-screen z-10 top-0 left-0 bg-white overflow-hidden transition-transform duration-1000 ease-in-out transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
                    <ul className='flex flex-col items-center gap-6 justify-center text-2xl font-medium h-full w-full'>
                        <li>
                            <Link to='/' className="hover:bg-black hover:text-white px-5 py-4 rounded-2xl transition duration-150 ease-in-out" onClick={toggle}>
                                Home
                            </Link>
                        </li>
                        <li className="relative group">
                            <div className='flex items-center'>
                                <Link to='/Product' className="hover:text-gray-600">Products</Link>
                                <MdOutlineArrowDropDown />
                            </div>
                            <ul className="absolute top-3 mt-4 font-bold w-48 bg-white text-pink-600 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-900 ease-in invisible text-center">
                                <li className="p-2 hover:bg-gray-200"><Link to="">Pakistani Suit</Link></li>
                                <li className="p-2 hover:bg-gray-200"><Link to="">Wedding Suit</Link></li>
                                <li className="p-2 hover:bg-gray-200"><Link to="">Georgette</Link></li>
                                <li className="p-2 hover:bg-gray-200"><Link to="">Cotton Suit</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/About' className="hover:bg-black hover:text-white px-5 py-4 rounded-2xl transition duration-150 ease-in-out" onClick={toggle}>About</Link></li>
                        <li><Link to='/Contact' className="hover:bg-black hover:text-white px-5 py-4 rounded-2xl transition duration-150 ease-in-out" onClick={toggle}>Contact Us</Link></li>
                    </ul>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-5">
                    <ul className='flex gap-8 text-lg font-medium'>
                        <li><Link to='/' className="hover:text-gray-600">Home</Link></li>
                        <li className="relative group">
                            <div className='flex items-center'>
                                <Link to='/Product' className="hover:text-gray-600">Products</Link>
                                <MdOutlineArrowDropDown />
                            </div>
                            <ul className="absolute top-3 mt-4 font-bold w-48 bg-white text-pink-600 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-900 ease-in invisible text-center">
                                <li className="p-2 hover:bg-gray-200"><Link to="">Pakistani Suit</Link></li>
                                <li className="p-2 hover:bg-gray-200"><Link to="">Wedding Suit</Link></li>
                                <li className="p-2 hover:bg-gray-200"><Link to="">Georgette</Link></li>
                                <li className="p-2 hover:bg-gray-200"><Link to="">Cotton Suit</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/About' onClick={() => { navigate('/About') }} className="hover:text-gray-600">About</Link></li>
                        <li><Link to='/Contact' onClick={() => { navigate('/Contact') }} className="hover:text-gray-600">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Search and Cart */}
                <div className="navserch flex items-center gap-4 mt-3">
                    <input
                        type="text"
                        placeholder='Search'
                        className="px-4 py-2 mb-4 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-gray-600"
                    />
                    <Link to="/cart" className=" cart text-xl hover:text-gray-600 mb-4">
                        <FaShoppingCart />
                    </Link>

                    {/* Hamburger Menu for Mobile */}
                    <div className={` menu-btn text-3xl md:hidden z-50 mb-4 cursor-pointer ${isOpen ? "rounded-xl hover:bg-black hover:text-white transition duration-150 ease-out p-2" : ""}`} onClick={toggle}>
                        {isOpen ? <CgClose /> : <CgMenu />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
