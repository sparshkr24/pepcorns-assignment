import React from 'react'
import img1 from '../assets/145.svg'
import Image from 'next/image'

const Discussion = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-bold text-gray-700'>Discussion</div>
        <button className='bg-[#0412bd] py-2.5 px-4 text-white text-sm'>Add Comment</button>
      </div>
      <div className='flex justify-center items-center mt-28'>
        <div className='flex flex-col justify-center items-center'>
          <Image src={img1} alt='img' width={220} height={220}/>
          <p className='text-gray-600 font-semibold mt-6'>No Comments Found. Be the first one to comment!</p>
        </div>
      </div>
    </>
  )
}

export default Discussion
