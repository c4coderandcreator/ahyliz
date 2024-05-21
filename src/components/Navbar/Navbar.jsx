import React from "react";

const Navbar = () => {
  return (
    <div className="flex mx-20 justify-between h-[6.25rem]">
      <div className="px-6 py-4">
        <img
          src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/42a9b7f29a07ac9f0abf60584a89e918ec8aa762/Resources/Home/Images/Logo.svg"
          alt="logo"
        />
      </div>
      <div className="flex items-center font-[CamptonBook]">
        <p className="px-7 py-2 text-[1.25rem]">Home</p>
        <p className="px-7 py-2 text-[1.25rem]">About</p>
        <p className="px-7 py-2 text-[1.25rem]">Services</p>
        <p className="px-7 py-2 text-[1.25rem]">Careers</p>
        <p className="px-7 py-2 text-[1.25rem]">Contact Us</p>
        <p className="px-7 py-2 text-[1.25rem]">Legal</p>
        <p className="px-7 py-4 mx-6 bg-[#4f45E2] rounded-lg text-[#ffffff]">
          {" "}
          Get Started
        </p>
      </div>
    </div>
  );
};

export default Navbar;
