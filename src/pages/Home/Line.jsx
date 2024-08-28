import React from 'react'

const Line = ({name,name2}) => {
  return (
    <div className='flex justify-center items-center mt-10'>
    <div className='border-2 border-black w-56 mx-4'></div>
    <div>
      <h1 className='font-bold text-2xl'>{name}{name2}</h1>
    </div>
    <div className='border-2 border-black w-56 mx-4'></div>
  </div>

  )
}

export default Line