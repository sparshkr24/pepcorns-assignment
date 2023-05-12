import Image from 'next/image'
import React from 'react'

import wallet from "../assets/wallet.jpg";
import productImg from "../assets/productImg.png";
import globe from "../assets/globe.jpg";

const ProductIntro = () => {
  return (
    <>
      <div id="mainAd">
            <div id="heading" className="pt-4">
              <div className="bg-[#C3B1E1] inline text-xs font-medium px-2 py-2">
                # BEAUTY & PERSONAL CARE
              </div>
              <div className="bg-[#F3EAC0] text-[#473EF2] font-medium inline text-xs px-2 py-2">
                # SHARK TANK
              </div>
              <div className="inline font-medium text-xs pl-2"># FMCG</div>

              <div className="pt-6 pb-3 font-bold md:text-xl font-sans tracking-wide">
                Molecular skincare brand focussed on safe & visible results
              </div>
              <div className='text-sm'>
                <Image
                  src={globe}
                  className="inline mr-3"
                  alt="globe"
                  width={20}
                />
                <a
                  className="inline pr-4 text-gray-600 hover:text-blue-600"
                  href="https://mycosiq.com"
                >
                  https://mycosiq.com
                </a>
                <Image
                  src={wallet}
                  className="inline mr-3"
                  alt="globe"
                  width={24}
                />
                <span className="text-gray-600">AAGCI5003E</span>
              </div>
            </div>

            {/* image and content box */}
            <div
              id="content"
              className="lg:flex lg:justify-center pt-6 px-2 h-full"
            >
              {/* Left - image box */}
              <div className="lg:w-2/3 h-full">
                <Image src={productImg} alt="product-img" />
              </div>
              {/* Right - content box */}
              <div className="lg:w-1/3 md:pl-4">
              <div id="grayLine" className="bg-gray-300 w-full h-px"></div>
                <div className="py-8 px-4 sm:pl-12">
                  <div>
                    <p className="font-semibold text-gray-700 text-lg pb-1">₹855000</p>
                    <p className="text-xs text-gray-600 font-medium pb-5">34.2 % of minimum goal raised</p>
                  </div>
                  <div id="grayLine" className="bg-gray-300 w-full h-px mb-3"></div>
                  <div>
                    <p className="font-semibold text-gray-700 text-lg pb-1">50</p>
                    <p className="text-xs text-gray-600 font-medium pb-5">Total investors</p>
                  </div>
                  <div id="grayLine" className="bg-gray-300 w-full h-px mb-3"></div>
                  <div>
                    <p className="font-semibold text-gray-700 text-lg pb-1">16 Days</p>
                    <p className="text-xs text-gray-600 font-medium pb-5"> Left to Invest</p>
                  </div>
                  <button id="Invest" className="bg-black text-white text-medium w-full py-2 px-4 mb-2">Login To Invest</button>
                  <div className="text-sm text-center text-gray-500 font-medium pb-5">₹ 1000 Minimum Investment</div>
                </div>
                <div id="grayLine" className="hidden lg:block bg-gray-300 w-full h-px mt-24"></div>
              </div>
            </div>

            {/* extra footer text */}
            <div id="footer-text" className="hover:cursor-pointer hover:text-blue-600">Unable to view video? Click here</div>
          </div>
    </>
  )
}

export default ProductIntro
