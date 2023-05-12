import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import discord from "../assets/discord.svg";

const Footer = () => {
  return (
    <>
      <div class="bg-gradient-to-b from-[#0412bd] via-[#071292] to-[#010414] text-sm">
        <div id="upperPart" className="md:flex md:justify-between text-white p-10">
          <div className="mb-4 md:mb-0">
            <Image src={logo} className="mb-6" alt="logo" width={140} />
            <p>
              Enabling everyday people to invest <br />
              in startups they believe in
            </p>
            <div className="flex justify-between mt-5">
              <div>
                <a href="">
                  <Image
                    src={facebook}
                    className="inline mr-8"
                    alt="fb"
                    width={20}
                  />
                </a>
                <a href="">
                  <Image
                    src={instagram}
                    className="inline"
                    alt="fb"
                    width={20}
                  />
                </a>
              </div>
              <div>
                <a href="">
                  <Image
                    src={linkedin}
                    className="inline mr-8"
                    alt="fb"
                    width={20}
                  />
                </a>
                <a href="">
                  <Image src={discord} className="inline" alt="fb" width={20} />
                </a>
              </div>
            </div>
          </div>
          {/* col1 */}
          <div className="flex flex-col justify-between mb-4 md:mb-0">
            <div>
              <p className="mb-1 font-semibold">FOR INVESTORS</p>
              <div className="bg-white w-2/5 h-px mb-2"></div>
              <a href="#" className="block mb-2">Start Investing</a>
              <a href="#" className="block mb-2">How Investing works</a>
            </div>
            <a href="#" className="block mb-1 font-semibold">Terms Of Use</a>
          </div>

          {/* col2 */}
          <div className="flex flex-col justify-between mb-4 md:mb-0">
            <div>
              <p className="mb-1 font-semibold">FOR STARTUPS</p>
              <div className="bg-white w-2/5 h-px mb-2"></div>

              <a href="#" className="block mb-2">Raise Capital</a>
              <a href="#" className="block mb-2">How it works</a>
              <a href="#" className="block mb-2">Instruments</a>
            </div>
            <a href="#" className="block mb-1 font-semibold">Privacy Policy</a>
          </div>

          {/* col3 */}
          <div className="flex flex-col justify-between mb-4 md:mb-0">
            <div>
              <p className="mb-1 font-semibold">Company</p>
              <div className="bg-white w-2/5 h-px mb-2"></div>

              <a href="#" className="block mb-2">About</a>
              <a href="#" className="block mb-2">Blog</a>
              <a href="#" className="block mb-2">FAQ</a>
              <a href="#" className="block mb-2">Contact</a>
              <a href="#" className="block mb-2">We&apos;re hiring</a>
            </div>
            <a href="#" className="block mb-1 mt-16 font-semibold">Refund Policy</a>
          </div>

          {/* col4 */}
          <div className="flex flex-col justify-between mb-4 md:mb-0">
            <div className="text-center align-middle">
              <p>location_on Kanpur| Bengaluru <br/> |Delhi</p>
              <a href="#">
                mail support@pepcorns.com
              </a>
            </div>
            <a href="#" className="block mb-1 font-semibold">Risks</a>
          </div>
        </div>

        <div id="lowerPart" className="p-10">
            <p className="text-gray-500 text-md">
            <a className="text-blue-600" href="www.pepcorns.com"> www.pepcorns.com</a> (“Platform”) is a website owned and operated by Pepcorns Technologies Private Limited (“Pepcorns”),
            which is neither a registered stock exchange, an investment advisor nor a funding portal and is not registered with the
            Securities Exchange Board of India (“SEBI”). Nothing contained on this Platform shall be construed as an authorization by
            the SEBI to solicit investments nor should the Platform be construed as a SEBI authorized crowdfunding platform or a
            stock exchange, or their equivalent. The securities offered by any company registered on Platform are not traded on
            any stock exchange recognised by SEBI. Pepcorns does not allow any secondary market trading of securities on the Platform
            . By accessing this Platform and any pages thereof, you agree to be bound by the <span className="text-blue-600"> Terms of Use</span> and <span className="text-blue-600"> Privacy Policy .</span>
            Investing in start-ups and early-stage businesses involves risks, including illiquidity, lack of dividends, loss
            of investment and dilution, and it should be done only as part of a diversified portfolio. Pepcorns is targeted 
            exclusively at investors who are sufficiently sophisticated to understand these risks and make their own investment
            decisions. Please read our <span className="text-blue-600"> RISK POLICY .</span>
            </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
