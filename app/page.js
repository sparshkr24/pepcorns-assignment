"use client";

import Image from "next/image";

import cosIQ from "../assets/cosIQ.jpg";


import { useState } from "react";
import Pitch from "@/components/Pitch";
import Details from "@/components/Details";
import Discussion from "@/components/Discussion";
import Updates from "@/components/Updates";
import InvestmentPricing from "@/components/InvestmentPricing";
import Navbar from "@/components/Navbar";
import ProductIntro from "@/components/ProductIntro";
import Footer from "@/components/Footer";
// 3b82f680
export default function Home() {

  const [tab, setTab] = useState(1)
  const handleTab = (tabValue)=>{
    setTab(tabValue)
  }

  return (
    <>
      <div id="Full-page" className="bg-[#d0d8e71f] w-full overflow-hidden">
        {/* navbar */}
        <Navbar/>
        <div id="main-content" className="px-2 md:px-28 md:py-20">
          {/* back */}
          <div
            id="back"
            className="hover:cursor-pointer pt-8 flex justify-start items-center text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="inline"
              width={10}
            >
              <path
                fill="#808080"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
            <div className="pl-3 text-sm">Back</div>
          </div>
          {/* cosIQ */}
          <div
            id="cosIQ"
            className="flex justify-between items-center pt-10 pb-4"
          >
            <div className="flex justify-start items-center">
              <Image src={cosIQ} className="inline" alt="cosIQ" width={48} />
              <div className="inline pl-6">
                <p className="inline text-3xl font-bold">CosIQ</p>
                <p className="text-gray-600">Delhi,</p>
              </div>
            </div>
            <div className="">
              <button className="inline ml-2 border border-[#2829c1] text-[#2829c1] py-2 px-4">
                Save
              </button>
              <button className="inline ml-2 border border-[#2829c1] text-[#2829c1] py-2 px-4">
                Share
              </button>
            </div>
          </div>
          {/* gray line */}
          <div id="grayLine" className="bg-gray-300 w-full h-px"></div>

          {/* Product Intro */}
          <ProductIntro/>

          {/* tabs */}
          <div className="flex justify-start items-center mt-16 py-3 shadow-sm bg-[#ecebd51a] overflow-x-auto">
            <button onClick={()=> handleTab(1)} className={`mr-3 border rounded-3xl px-4 py-2 ${tab==1? "bg-black text-white": "border-black"}`}>Pitch</button>
            <button onClick={()=> handleTab(2)} className={`mr-3 border rounded-3xl px-4 py-2 ${tab==2? "bg-black text-white": "border-black"}`}>Details</button>
            <button onClick={()=> handleTab(3)} className={`mr-3 border rounded-3xl px-4 py-2 ${tab==3? "bg-black text-white": "border-black"}`}>Discussion</button>
            <button onClick={()=> handleTab(4)} className={`mr-3 border rounded-3xl px-4 py-2 ${tab==4? "bg-black text-white": "border-black"}`}>Updates</button>
          </div>

          {/* full content */}
          <div id="full-content" className="flex justify-between my-9`">
            {/* pitch slides */}
            <div className="border w-full lg:w-2/3 p-4">{tab==1?<Pitch/>: (tab==2? <Details/>: (tab==3? <Discussion/>: (tab==4? <Updates/>: <Pitch/>)))}</div>

            {/* investmentPlans */}
            <div id="investmentPlans" className="w-1/3 hidden lg:block">
              <div id="grayLine" className="bg-gray-200 w-full h-px"></div> 
              <div className="p-4"> <InvestmentPricing/> </div>
              
            </div>
          </div>
        </div>

        <div id="footer">
          <Footer/>
        </div>
      </div>
    </>
  );
}
