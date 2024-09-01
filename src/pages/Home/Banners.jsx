import React from 'react'
import trend1 from '/src/assets/trending/trend1.jpeg'
const Banners = () => {
    return (
        <div className="relative text-center bg-[#f3f3f3] h-1/4 py-16 md:py-24 ">
            <img src={trend1} alt="Sale" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="relative z-10  ml-5">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white font-basker">
                    Big Summer Sale!
                </h1>
                <p className="mt-4 text-lg md:text-2xl text-white font-playfair">
                    Up to 70% off
                </p>
                <p className="mt-4 text-lg md:text-2xl text-white font-playfair">
                    On Limited Collection!
                </p>
                <button className="mt-8 font-playfai md:w-2/12 px-8 py-3 bg-pink-600 text-white font-bold rounded-lg shadow-lg hover:bg-white hover:text-pink-400 transition duration-300">
                    Shop Now
                </button>
            </div>
        </div>
    )
}

export default Banners