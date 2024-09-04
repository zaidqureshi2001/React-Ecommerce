import React, { useState } from 'react'
import context from 'react-bootstrap/esm/AccordionContext';
// import image1 from '/src/assets/image1.jpeg'
// import image2 from '/src/assets/image2.jpeg'
// import image3 from '/src/assets/image3.jpeg'
// import image4 from '/src/assets/image4.jpeg'
// import image5 from '/src/assets/image5.jpeg'
import { ChevronLeft, ChevronRight } from 'react-feather'

const Carouselsall = ({ newimg,width,height,justifyContent = "center",top,padding}) => {
    const [curr, setCurr] = useState(0);
    const prev = () =>
        setCurr(curr => curr === 0 ? newimg.length - 1 : curr - 1)
    const next = () =>
        setCurr(curr => curr === newimg.length - 1 ? 0 : curr + 1)

    // const allimage = [
    //     image2,
    //     image3,
    //     image4,
    //     image5,
    //     image1
    // ]
    return (

        <div className='relative px-12 cursor-pointer 'style={{justifyContent,padding}}  >
            <div className='overflow-hidden relative' >
                <div className= ' flex w-[130px]  md:w-[300px]  transition-transform ease-in-out duration-50 ' style={{width,height,transform: `translateX(-${curr * 100}%)`
                }}>
                    {
                        newimg.map((e, i) => {
                            return <img src={e} key={i} alt="error" className='rounded-2xl '  />
                        })
                    }
                </div>
            </div>
            <div className=' absolute inset-0 items-center flex justify-between' >
                <div className="absolute w-10 top-48 cursor-pointer h-[40px] inset-0 bg-gray-100 opacity-30 rounded-full" style={{top}}></div>  {/* Background layer */}
                <div className="absolute md:z-10 hover:bg-white rounded-full " onClick={prev} >
                    <ChevronLeft size={40} className="text-black" />
                </div>
            </div>
            <div className=' absolute end-0.5 top-48 items-center flex justify-between' style={{top}}>
                <div className="absolute w-10 cursor-pointer h-[40px] inset-0 bg-gray-100 opacity-30 rounded-full"></div>  {/* Background layer */}

                <div className=" md:z-10 hover:bg-white rounded-full transition-all" onClick={next}>
                    <ChevronRight size={40} className="text-black" />
                </div>
            </div>
        </div>

    )
}

export default Carouselsall