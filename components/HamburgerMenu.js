import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import cross from '../assets/cross.svg'

const HamburgerMenu = ({isOpen, setIsOpen}) => {
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
      <div
        className={`${
          isOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        } p-6 fixed top-0 left-0 z-30 w-full overflow-y-auto bg-black border-r shadow-lg h-full transition duration-300 transform`}
      >
        <div className="flex justify-between items-center">
          <div>
            <Image
              src={logo}
              className="hover:cursor-pointer"
              alt="logo"
              width={140}
              height={"auto"}
            />
          </div>
          <div>
            <Image
              src={cross}
              onClick={toggleMenu}
              className="hover:cursor-pointer"
              alt="logo"
              width={16}
              height={"auto"}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-start items-start">
            <button className="text-sm mb-1 text-white px-3 py-2 hover:bg-white hover:text-black hover:cursor-pointer">Startups</button>
            <button className="text-sm mb-1 text-white px-3 py-2 hover:bg-white hover:text-black hover:cursor-pointer">Raise Funding</button>
            <button className="text-sm mb-1 text-white px-3 py-2 hover:bg-white hover:text-black hover:cursor-pointer">Login</button>
            <button className="text-sm mb-1 text-black border bg-white py-2 px-3 hover:cursot-pointer hover:bg-black hover:text-white hover:border-white">Get Started</button>
            <div className="h-px w-full bg-gray-700 mt-2 mb-5"></div>
            <p className="text-xs text-gray-400 my-2">Learn</p>
            <p className="font-normal text-sm my-3 text-white">SHE.E.O</p>
            <p className="font-normal text-sm my-3 text-white">Blog</p>
            <p className="font-normal text-sm my-3 text-white">FAQ</p>
            <p className="font-normal text-sm my-3 text-white">Knowledge Base</p>
            <p className="font-normal text-sm my-3 text-white">About</p>
            <p className="font-normal text-sm my-3 text-white">Flashcards</p>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
