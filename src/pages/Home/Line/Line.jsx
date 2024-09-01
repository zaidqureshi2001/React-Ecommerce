import React from 'react'
import './Line.css'

const Line = ({name,name2}) => {
  return (
    <div className='flex justify-center items-center mt-10'>
    <div className=' Line border-2 border-black w-20 md:w-56 mx-4'></div>
    <div>
      <h1 className='font-bold md:text-2xl  font-playfair'>{name}{name2}</h1>
    </div>
    <div className='Line border-2 border-black w-20 md:w-56 mx-4'></div>
  </div>

  )
}

export default Line