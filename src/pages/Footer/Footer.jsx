import React from 'react';
import { FaCcMastercard, FaCcVisa, FaFacebookF, FaGooglePay, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSmoothNavigate } from '../../useSmoothNavigate';
import { CiBank } from 'react-icons/ci';

const Footer = () => {
   const smoothNavigate=useSmoothNavigate()

    return (
        <footer className="bg-gray-900 text-white p-8 mt-16 font-playfair">
            <div className="container mx-auto grid grid-cols-1 md:flex justify-between gap-8">
                {/* Company Information */}
                <div>
                    <h3 className="font-bold text-lg mb-4 text-center">Find Offline Store </h3>
                    <div className="">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.225611283612!2d72.92282067434084!3d19.141599132076507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9c9e141b18d%3A0x3f6ab94da7fa261e!2sNazira%20Fashion!5e0!3m2!1sen!2sin!4v1725111182443!5m2!1sen!2sin"
                            width="100%"
                            height="150"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            title="Our Store Location"
                        ></iframe>

                    </div>

                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Our Services</h3>
                    <ul>
                        {/* <li> <Link to="/Contact" className='hover:underline'>Help & Contact Us</Link></li> */}
                        <li onClick={()=>smoothNavigate('/FAQ')} className='hover:underline cursor-pointer' >FAQ'S</li>
                        <li onClick={()=>smoothNavigate('/Privacy')} className='hover:underline cursor-pointer' >Privacy Policy</li>
                        <li onClick={()=>smoothNavigate('/Contact')} className='hover:underline cursor-pointer' >Help & Contact Us</li>

                    </ul>
                </div>
                {/* Shop */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Track Or Return / Exchange Order  </h3>
                    <ul>
                        <li><a href="#" className="hover:underline">Track Order</a></li>
                        <li><a href="#" className="hover:underline">Place Return / Exchange Request </a></li>
                        <li><a href="#" className="hover:underline">Return / Exchange Policy</a></li>
                    </ul>
                </div>

                {/* Newsletter Signup and Social Media */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Stay Connected</h3>
                    <form className="mb-4">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="p-2 w-full text-black rounded-md mb-2"
                            placeholder="Subscribe to our newsletter"
                        />
                        <button className="bg-blue-500 text-white p-2 rounded-md w-full">Subscribe</button>
                    </form>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="hover:text-blue-500">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" className="hover:text-pink-500">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" className="hover:text-blue-400">
                            <FaTwitterSquare />
                        </a>

                    </div>
                </div>
            </div >

            <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
                <p>&copy; 2024 Zuberiya Global. All Rights Reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <FaCcVisa size={50} />
                    <FaCcMastercard size={50}  />
                    <FaGooglePay size={50}/>
                    <CiBank size={50} />
                </div>
            </div>

        </footer >
    );
};

export default Footer;
