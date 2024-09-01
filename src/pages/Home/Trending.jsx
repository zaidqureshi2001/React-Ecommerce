import React, { Suspense, useState } from 'react';
import trend1 from '/src/assets/trending/trend1.jpeg/';
import trend2 from '/src/assets/trending/trend2.jpeg/';
import trend3 from '/src/assets/trending/trend3.jpeg/';
import trend4 from '/src/assets/trending/trend4.jpeg/';
import trend5 from '/src/assets/trending/trend5.jpeg/';
import trend6 from '/src/assets/trending/trend6.jpeg/';
import trend7 from '/src/assets/trending/trend7.jpeg/';
import trend8 from '/src/assets/trending/trend8.jpeg/';

const Trending = () => {
    const [enter, setEnter] = useState(null);

    return (
        <div className='Trending-container'>
            <div className='mt-16'>
                <div className='flex-col m-3 p-4 md:flex md:flex-row h-full font-basker'>
                    <Suspense fallback={<div>Loading....</div>}>
                        <div
                            className={`relative transform transition-transform duration-700 ${enter === 1 ? 'scale-90' : ''
                                }`}
                            onMouseEnter={() => setEnter(1)}
                            onMouseLeave={() => setEnter(null)}
                        >
                            <img
                                src={enter === 1 ? trend1 : trend2}
                                alt=""
                                className='cursor-pointer p-2 rounded-2xl'
                            />
                            <span className='absolute bottom-6 left-6 text-white md:text-2xl font-bold bg-black bg-opacity-40 px-2 py-1 rounded-md shadow-lg'>
                                REAL GEORGETTE
                            </span>
                        </div>
                        <div
                            className={`relative transform transition-transform duration-700 ease-in-out ${enter === 2 ? 'scale-90' : ''
                                }`}
                            onMouseEnter={() => setEnter(2)}
                            onMouseLeave={() => setEnter(null)}
                        >
                            <img
                                src={enter === 2 ? trend4 : trend3}
                                alt=""
                                className='p-2 cursor-pointer rounded-2xl'
                            />
                            <span className='absolute bottom-6 left-6 text-white md:text-2xl font-bold bg-black bg-opacity-40 px-2 py-1 rounded-md shadow-lg'>
                                PREMIUM SILK
                            </span>
                        </div>
                        <div
                            className={`relative transform transition-transform duration-700 ${enter === 3 ? 'scale-90' : ''
                                }`}
                            onMouseEnter={() => setEnter(3)}
                            onMouseLeave={() => setEnter(null)}
                        >
                            <img
                                src={enter === 3 ? trend6 : trend5}
                                alt=""
                                className='cursor-pointer p-2 rounded-2xl'
                            />
                            <span className='absolute bottom-6 left-6 text-white md:text-2xl font-bold bg-black bg-opacity-40 px-2 py-1 rounded-md shadow-lg'>
                                PRINTED COTTON
                            </span>
                        </div>
                        <div
                            className={`relative transform transition-transform duration-700 ${enter === 4 ? 'scale-90' : ''
                                }`}
                            onMouseEnter={() => setEnter(4)}
                            onMouseLeave={() => setEnter(null)}
                        >
                            <img
                                src={enter === 4 ? trend7 : trend8}
                                alt=""
                                className='cursor-pointer p-2 rounded-2xl'
                            />
                            <span className='absolute bottom-6 left-6 text-white md:text-2xl font-bold bg-black bg-opacity-40 px-2 py-1 rounded-md shadow-lg'>
                                PRINT & HANDWORK
                            </span>
                        </div>
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default Trending;
