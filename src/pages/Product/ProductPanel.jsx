import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Product.css'

const ProductPanel = () => {
  return (
    <div className='side_list   p-3'>
    <div className='panel flex list-none md:gap-3  p-3  md:p-5 bg-red-200 md:justify-start ml-12 items-center font-bold md:text-xl text-xs'>
     <li><Link to='/Pakistani'>Pakistani Suits</Link></li>
     <MdKeyboardArrowRight  />
     <li><Link to='/Georgette' >Georgette</Link></li>
     <MdKeyboardArrowRight />
     <li><Link to='/Wedding'>Wedding Suit</Link></li>
     <MdKeyboardArrowRight />
     <li><Link to='/Cotton' >Cotton Suits</Link></li>
    </div>
    </div>  )
}

export default ProductPanel