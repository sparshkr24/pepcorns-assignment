import React from 'react'
import cloudDown from '../assets/cloudDown.svg'
import Image from 'next/image'

import pitch1 from '../assets/pitch1.png'
import pitch2 from '../assets/pitch2.png'
import pitch3 from '../assets/pitch3.png'
import pitch4 from '../assets/pitch4.png'
import pitch5 from '../assets/pitch5.png'
import pitch6 from '../assets/pitch6.png'
import pitch7 from '../assets/pitch7.png'
import pitch8 from '../assets/pitch8.png'
import pitch9 from '../assets/pitch9.png'
import pitch10 from '../assets/pitch10.png'

const Pitch = () => {
  return (
    <>
    {/* header */}
      <div id="header" className='flex justify-between items-center'>
        <div className='text-2xl font-semibold'>Deck info</div>
        <a href="https://api.pepcorns.com/clientassets/icon1677255746699.pdf" className='bg-[#0412bd] text-white text-sm py-1.5 px-3'> <Image src={cloudDown} className='inline mr-1' alt="downloadSVG" width={20} /> CosIQ_pitch.pdf</a>
      </div>
      <div id="pitchSlides" className='mb-8'>
        <Image className='rounded-2xl pt-8' src={pitch1} alt='pitchSlide'/>
        <Image className='rounded-2xl pt-8' src={pitch2} alt='pitchSlide'/>
        <Image className='rounded-2xl pt-8' src={pitch3} alt='pitchSlide'/>
        <Image className='rounded-2xl pt-8' src={pitch4} alt='pitchSlide'/>
        <Image className='rounded-2xl pt-8' src={pitch5} alt='pitchSlide'/>
        <Image className='rounded-2xl pt-8' src={pitch6} alt='pitchSlide'/>
        <Image className='rounded-2xl pt-8' src={pitch7} alt='pitchSlide'/>
        <Image className='rounded-2xl pt-8' src={pitch8} alt='pitchSlide'/>
        <Image className='rounded-2xl pt-8' src={pitch9} alt='pitchSlide'/>
        <Image className='rounded-2xl pt-8' src={pitch10} alt='pitchSlide'/>
      </div>
    </>
  )
}

export default Pitch
