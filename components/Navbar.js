import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import ham from '../assets/ham.svg'
import cross from '../assets/cross.svg'
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        id="navbar"
        className="flex justify-between items-center bg-black md:fixed p-6 sm:py-6 sm:px-12 w-full"
      >
        <div>
          <Image
            src={logo}
            className="hover:cursor-pointer"
            alt="logo"
            width={140}
            height={"auto"}
          />
        </div>

        {/* hamburger menu start */}
        <button className="block lg:hidden" onClick={toggleMenu}>
          <Image src={ham} alt="hamburger" width={20} height={20}/>
        </button>
        {/* hamburger menu end */}
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
        {/* sidebar content */}
        


        <div className="hidden lg:block font-medium text-sm">
          <div className="inline text-white px-5 mr-10 py-2.5 hover:bg-white hover:text-black hover:cursor-pointer">
            Startups
          </div>
          <div className="inline text-white px-5 mr-10 py-2.5 hover:bg-white hover:text-black hover:cursor-pointer">
            Raise Funding
          </div>

          {/* dropdown-start */}
          <div class="dropdown text-white">
            <button class="dropbtn">Learn</button>
            <div class="dropdown-content">
              <a href="#">SHE.E.O</a>
              <a href="#">Blog</a>
              <a href="#">FAQ</a>
              <a href="#">Knowledge Base</a>
              <a href="#">About</a>
              <a href="#">Flashcards</a>
            </div>
          </div>
          {/* dropdown-end */}

          {/* <div className="inline text-white px-5 mr-10 py-2.5 hover:bg-white hover:text-black hover:cursor-pointer">Learn</div> */}
        </div>
        <div className="hidden lg:block font-medium text-sm">
          <div className="inline text-white mr-16 px-4 py-2 hover:cursor-pointer hover:bg-white hover:text-black">
            Login
          </div>
          <button className="text-black border bg-white py-2 px-4 hover:cursot-pointer hover:bg-black hover:text-white hover:border-white">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
