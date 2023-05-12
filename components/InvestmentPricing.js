import Image from "next/image";
import React from "react";

import cloudDown2 from "../assets/cloudDown2.svg";

const InvestmentPricing = () => {
  return (
    <>
      <p className="text-2xl font-semibold mb-3">Documents</p>
      <div className="flex justify-between items-center border border-gray-300 py-4 px-5">
        <div className="text-sm">CosIQ.zip</div>
        <div>
          <Image
            src={cloudDown2}
            className="inline"
            alt="downloadSVG"
            width={20}
          />
        </div>
      </div>

      {/* pricing plans */}
      <div id="pricing plans" className="my-12">
        {/* number 1 */}
        <div className="border border-[#0412bd] p-6 hover:shadow-lg hover:cursor-pointer">
          <div>
            <p className="text-3xl font-bold mb-3">₹ 5000</p>
            <div id="grayLine" className="bg-gray-300 w-full h-px mb-4"></div>
          </div>
          <div>
            <p className="font-semibold text-sm mb-1">Rewards </p>
            <div className="flex justify-start items-center mb-4">
                <div className="bg-black h-1 w-1 rounded-2xl inline-block mr-4"></div>
                <p className="inline text-sm">Community access & benefits .</p>
            </div>
            <p className="font-semibold text-sm mb-1"> Terms and Conditions </p>
            <p className=" text-sm mb-4">Community participants offer</p>
          </div>
          <div>
            <button className="w-full mb-4 px-4 py-3 bg-[#0412bd] text-white text-sm">Invest <span className="font-bold ml-1">₹5000</span></button>
            <p className="text-sm"><span className="font-bold">CSOP</span> Limited (<span className="font-bold"> 68 of 100</span> left)</p>
          </div>
        </div>

        {/* number 2 */}
        <div className="border border-[#0412bd] p-6 hover:shadow-lg hover:cursor-pointer">
          <div>
            <p className="text-3xl font-bold mb-3">₹ 10000</p>
            <div id="grayLine" className="bg-gray-300 w-full h-px mb-4"></div>
          </div>
          <div>
            <p className="font-semibold text-sm mb-1">Rewards </p>
            <div className="flex justify-start items-center mb-1">
                <div className="bg-black h-1 w-1 rounded-2xl inline-block mr-4"></div>
                <p className="inline text-sm">Community access & involvement.</p>
            </div>
            <div className="flex justify-start items-center mb-4">
                <div className="bg-black h-1 w-1 rounded-2xl inline-block mr-4"></div>
                <p className="inline text-sm">Be part of our growth journey.</p>
            </div>
            <p className="font-semibold text-sm mb-1"> Terms and Conditions </p>
            <p className=" text-sm mb-4">Community participants offer</p>
          </div>
          <div>
            <button className="w-full mb-4 px-4 py-3 bg-[#0412bd] text-white text-sm">Invest <span className="font-bold ml-1">₹10000</span></button>
            <p className="text-sm"><span className="font-bold">CSOP</span> Limited (<span className="font-bold"> 96 of 100</span> left)</p>
          </div>
        </div>

        {/* number 3 */}
        <div className="border border-[#0412bd] p-6 hover:shadow-lg hover:cursor-pointer">
          <div>
            <p className="text-3xl font-bold mb-3">₹ 25000</p>
            <div id="grayLine" className="bg-gray-300 w-full h-px mb-4"></div>
          </div>
          <div>
            <p className="font-semibold text-sm mb-1">Rewards </p>
            <div className="flex justify-start items-center mb-1">
                <div className="bg-black h-1 w-1 rounded-2xl inline-block mr-4"></div>
                <p className="inline text-sm">Community access & benefits .</p>
            </div>
            <div className="flex justify-start items-center mb-4">
                <div className="bg-black h-1 w-1 rounded-2xl inline-block mr-4"></div>
                <p className="inline text-sm">Special mention in our community group.</p>
            </div>
            <p className="font-semibold text-sm mb-1"> Terms and Conditions </p>
            <p className=" text-sm mb-4">Community participants offer</p>
          </div>
          <div>
            <button className="w-full mb-4 px-4 py-3 bg-[#0412bd] text-white text-sm">Invest <span className="font-bold ml-1">₹25000</span></button>
            <p className="text-sm"><span className="font-bold">CSOP</span> Limited (<span className="font-bold"> 50 of 50</span> left)</p>
          </div>
        </div>

        {/* number 4 */}
        <div className="border border-[#0412bd] p-6 hover:shadow-lg hover:cursor-pointer">
          <div>
            <p className="text-3xl font-bold mb-3">₹ 50000</p>
            <div id="grayLine" className="bg-gray-300 w-full h-px mb-4"></div>
          </div>
          <div>
            <p className="font-semibold text-sm mb-1">Rewards </p>
            <div className="flex justify-start items-center mb-1">
                <div className="bg-black h-1 w-1 rounded-2xl inline-block mr-4"></div>
                <p className="inline text-sm">Community perks & notable mention</p>
            </div>
            <div className="flex justify-start items-center mb-4">
                <div className="bg-black h-1 w-1 rounded-2xl inline-block mr-4"></div>
                <p className="inline text-sm">Community access & benefits</p>
            </div>
            <p className="font-semibold text-sm mb-1"> Terms and Conditions </p>
            <p className=" text-sm mb-4">Community participants offer</p>
          </div>
          <div>
            <button className="w-full mb-4 px-4 py-3 bg-[#0412bd] text-white text-sm">Invest <span className="font-bold ml-1">₹50000</span></button>
            <p className="text-sm"><span className="font-bold">CSOP</span> Limited (<span className="font-bold"> 17 of 20</span> left)</p>
          </div>
        </div>

        {/* number 5 */}
        <div className="border border-[#0412bd] p-6 hover:shadow-lg hover:cursor-pointer">
          <div>
            <p className="text-3xl font-bold mb-3">₹ 80000</p>
            <div id="grayLine" className="bg-gray-300 w-full h-px mb-4"></div>
          </div>
          <div>
            <p className="font-semibold text-sm mb-4">Rewards </p>
            <div className="flex justify-start items-center mb-4">
                <div className="bg-black h-1 w-1 rounded-2xl inline-block mr-4"></div>
                <p className="inline text-sm">All of the above + early access to our newly launched product for feedback.</p>
            </div>
            <p className="font-semibold text-sm mb-1"> Terms and Conditions </p>
            <p className=" text-sm mb-4">Community participants offer</p>
          </div>
          <div>
            <button className="w-full mb-4 px-4 py-3 bg-[#0412bd] text-white text-sm">Invest <span className="font-bold ml-1">₹80000</span></button>
            <p className="text-sm"><span className="font-bold">CSOP</span> Limited (<span className="font-bold"> 6 of 10</span> left)</p>
          </div>
        </div>

        {/* number 6 */}
        <div className="border border-[#0412bd] p-6 hover:shadow-lg hover:cursor-pointer">
          <div>
            <p className="text-3xl font-bold mb-3">₹ 90000</p>
            <div id="grayLine" className="bg-gray-300 w-full h-px mb-4"></div>
          </div>
          <div>
            <p className="font-semibold text-sm mb-1">Rewards </p>
            <div className="flex justify-start items-center mb-4">
                <div className="bg-black h-1 w-1 rounded-2xl inline-block mr-4"></div>
                <p className="inline text-sm">All of the above + Receive a fresh coupon each quarter!</p>
            </div>
            
            <p className="font-semibold text-sm mb-1"> Terms and Conditions </p>
            <p className=" text-sm mb-4">Community participants offer</p>
          </div>
          <div>
            <button className="w-full mb-4 px-4 py-3 bg-[#0412bd] text-white text-sm">Invest <span className="font-bold ml-1">₹90000</span></button>
            <p className="text-sm"><span className="font-bold">CSOP</span> Limited (<span className="font-bold"> 3 of 5</span> left)</p>
          </div>
        </div>
        <p className="mt-4 text-sm font-semibold">Custom offer? <span className="hover:cursor-pointer hover:text-[#0412bd]">Click here</span></p>
      </div>
      
    </>
  );
};

export default InvestmentPricing;
