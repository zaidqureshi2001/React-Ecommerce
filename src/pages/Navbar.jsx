    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { FaShoppingCart, FaShoppingBag } from 'react-icons/fa';
    import { CgClose, CgMenu } from 'react-icons/cg';
    import { MdOutlineArrowDropDown } from 'react-icons/md';
    import { useSmoothNavigate } from '../useSmoothNavigate';
    import './Navbar.css'
    import { useSelector } from 'react-redux';

    const Navbar = () => {
        const navigate = useSmoothNavigate();
        const [isOpen, setIsOpen] = useState(false);
        const items = useSelector((state) => state.cart)

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
                        <span className='text'>Zuberiya Global</span>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`fixed top-10 right-0 w-64 h-full bg-white shadow-lg z-40 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-500 md:hidden`}>
                    <ul className='flex flex-col text-center    m gap-6  mt-40   text-2xl font-medium h-full w-full'>
                            <li>
                                <Link to='/' className="hover:bg-black hover:text-white px-3 py-2 rounded-2xl transition duration-150 ease-in-out  " onClick={toggle}>
                                    Home
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link to='/Product' className="hover:bg-black hover:text-white px-3 py-2 rounded-2xl transition duration-150 ease-in-out" onClick={toggle}>Products</Link>
                            </li>
                            <hr />
                        
                            <li><Link to='/About' className="hover:bg-black hover:text-white px-3 py-2 rounded-2xl transition duration-150 ease-in-out" onClick={toggle}>About</Link></li>
                            <hr />
                            <li><Link to='/Contact' className="hover:bg-black hover:text-white px-3 py-2 rounded-2xl transition duration-150 ease-in-out" onClick={toggle}>Contact Us</Link></li>
                            <hr />
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
                                    <li className="p-2 hover:bg-gray-200"><Link to="/Pakistani">Pakistani Suit</Link></li>
                                    <li className="p-2 hover:bg-gray-200"><Link to="">Wedding Suit</Link></li>
                                    <li className="p-2 hover:bg-gray-200"><Link to="">Georgette</Link></li>
                                    <li className="p-2 hover:bg-gray-200"><Link to="/Cotton">Cotton Suit</Link></li>
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
                        <div className='flex '>
                            <Link to="/cart" className=" cart text-xl hover:text-gray-600 mb-4">
                                <FaShoppingCart onClick={() => { navigate('/Cart') }} />
                            </Link>
                            <p className='text-xl'>{items.length}</p>
                        </div>

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
