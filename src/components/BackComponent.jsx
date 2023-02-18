import React from 'react'
import { Link } from 'react-router-dom'

const BackComponent = () => {
  return (
    <Link
     to={"/"} 
     className='mt-8 text-2xl text-black hover:text-gray-700
                sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl'
    >
        Back to Home
    </Link>
  )
}

export default BackComponent;