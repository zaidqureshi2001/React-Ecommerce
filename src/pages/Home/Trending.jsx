import React, { Suspense, useState } from 'react'
// import LazyLoad from 'react-lazyload'
import trend1 from '/src/assets/trending/trend1.jpeg/'
import trend2 from '/src/assets/trending/trend2.jpeg/'
import trend3 from '/src/assets/trending/trend3.jpeg/'
import trend4 from '/src/assets/trending/trend4.jpeg/'
import trend5 from '/src/assets/trending/trend5.jpeg/'
import trend6 from '/src/assets/trending/trend6.jpeg/'
import trend7 from '/src/assets/trending/trend7.jpeg/'
import trend8 from '/src/assets/trending/trend8.jpeg/'


const Trending = () => {
    const [enter,setEnter]=useState(null);
    return (
        <div className='Trending-container'>
            <div className='  mt-16  '>
                <div className='  flex-col m-3 p-4 md:flex md:flex-row h-full' >
                    <Suspense fallback={<div>Loading....</div>}>
                        <div className=' relative ' onMouseEnter={()=>setEnter(1)} onMouseLeave={()=>setEnter(null)}>
                            <img src={enter === 1    ? trend1 :trend2} alt="" className='  rounded-2xl' />
                            <span className='absolute bottom-6 left-6 text-white md:text-lg text-bold'>REAL GEORGETTE</span>
                        </div>
                    </Suspense>
                    <div className=' relative'onMouseEnter={()=>setEnter(2)} onMouseLeave={()=>setEnter(null)}>
                            <img src={enter === 2 ? trend4 :trend3} alt="" className='p-2 rounded-2xl' />
                            <span className='absolute bottom-6 left-6'>PREMIMUM SILK</span>
                        </div>
                        <div className=' relative'onMouseEnter={()=>setEnter(3)} onMouseLeave={()=>setEnter(null)}>
                            <img src={enter === 3 ? trend6 : trend5} alt="" className='  p-2 rounded-2xl ' />
                            <span className='absolute bottom-6 left-6'>PRINTED COTTON</span>
                        </div>
                        <div className=' relative'onMouseEnter={()=>setEnter(4)} onMouseLeave={()=>setEnter(null)}>
                            <img src={enter === 4 ? trend7 : trend8} alt="" className='  p-2 rounded-2xl ' />
                            <span className='absolute bottom-6 left-6'> PRINT & HANDWORK</span>
                        </div>

                </div>

            </div>
        </div>
    )
}

export default Trending