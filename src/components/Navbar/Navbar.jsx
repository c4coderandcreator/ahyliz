import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex mx-4 sm:mx-20 justify-between h-[6.25rem] items-center">
      <div className="sm:px-6 py-4">
        <img
          src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/42a9b7f29a07ac9f0abf60584a89e918ec8aa762/Resources/Home/Images/Logo.svg"
          alt="logo"
        />
      </div>
      <div className="hidden sm:flex items-center font-[CamptonBook]">
        <p className="px-7 py-2 text-[1.25rem]">Home</p>
        <p className="px-7 py-2 text-[1.25rem]">About</p>
        <p className="px-7 py-2 text-[1.25rem]">Services</p>
        <p className="px-7 py-2 text-[1.25rem]">Careers</p>
        <p className="px-7 py-2 text-[1.25rem]">Contact Us</p>
        <p className="px-7 py-2 text-[1.25rem]">Legal</p>
        <p className="px-7 py-4 mx-6 bg-[#4f45E2] rounded-lg text-[#ffffff]">
          Get Started
        </p>
      </div>
      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`sm:hidden absolute top-[6.25rem] left-0 w-full bg-white shadow-lg z-10 transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center font-[CamptonBook] py-4">
          <p className="py-2 text-[1.25rem]">Home</p>
          <p className="py-2 text-[1.25rem]">About</p>
          <p className="py-2 text-[1.25rem]">Services</p>
          <p className="py-2 text-[1.25rem]">Careers</p>
          <p className="py-2 text-[1.25rem]">Contact Us</p>
          <p className="py-2 text-[1.25rem]">Legal</p>
          <p className="py-4 mx-6 bg-[#4f45E2] rounded-lg text-[#ffffff] w-3/4 text-center">
            Get Started
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
