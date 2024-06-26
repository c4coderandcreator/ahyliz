import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveTab(path);
    setIsOpen(false); // Close the navigation menu
  };

  return (
    <div className="sticky top-0 bg-white z-50 flex px-4 sm:px-1 lg:px-10 xl:px-20 justify-between h-auto sm:h-[6.25rem] items-center">
      <div className="sm:px-6 py-5 sm:py-4">
        <Link to="/" onClick={() => handleLinkClick("/")}>
          <img
            className="h-[4.2rem] w-[10rem]"
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/AT%20LOGO.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="hidden lg:flex items-center font-[LufgaBook]">
        <Link to="/" onClick={() => handleLinkClick("/")}>
          <p
            className="sm:px-3 xl:px-7 py-2 xl:text-[1.25rem] hover:opacity-40"
            style={{ color: activeTab === "/" ? "#4f45e2" : "inherit" }}
          >
            Home
          </p>
        </Link>
        <Link to="/about" onClick={() => handleLinkClick("/about")}>
          <p
            className="sm:px-3 xl:px-7 py-2 xl:text-[1.25rem] hover:opacity-40"
            style={{ color: activeTab === "/about" ? "#4f45e2" : "inherit" }}
          >
            About
          </p>
        </Link>
        <Link to="/services" onClick={() => handleLinkClick("/services")}>
          <p
            className="sm:px-3 xl:px-7 py-2 xl:text-[1.25rem] hover:opacity-40"
            style={{ color: activeTab === "/services" ? "#4f45e2" : "inherit" }}
          >
            Services
          </p>
        </Link>
        <Link to="/careers" onClick={() => handleLinkClick("/careers")}>
          <p
            className="sm:px-3 xl:px-7 py-2 xl:text-[1.25rem] hover:opacity-40"
            style={{ color: activeTab === "/careers" ? "#4f45e2" : "inherit" }}
          >
            Careers
          </p>
        </Link>
        <Link to="/contact" onClick={() => handleLinkClick("/contact")}>
          <p
            className="sm:px-3 xl:px-7 py-2 xl:text-[1.25rem] hover:opacity-40"
            style={{ color: activeTab === "/contact" ? "#4f45e2" : "inherit" }}
          >
            Contact Us
          </p>
        </Link>
        <Link to="/legal" onClick={() => handleLinkClick("/legal")}>
          <p
            className="sm:px-3 xl:px-7 py-2 xl:text-[1.25rem] hover:opacity-40"
            style={{ color: activeTab === "/legal" ? "#4f45e2" : "inherit" }}
          >
            Legal
          </p>
        </Link>
        <Link to="/contact" onClick={() => handleLinkClick("/contact")}>
          <p className="sm:px-2 xl:px-7 py-4 mx-6 bg-[#4f45E2] rounded-lg text-[#ffffff] hover:opacity-40">
            Get Started
          </p>
        </Link>
      </div>
      <div className="lg:hidden flex items-center sm:pr-4">
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
        className={` lg:hidden absolute top-[6.25rem] left-0 w-full bg-white shadow-lg z-10 transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center font-[LufgaBook] py-2">
          <Link to="/" onClick={() => handleLinkClick("/")}>
            <p
              className="py-2 text-[1rem] hover:opacity-40"
              style={{ color: activeTab === "/" ? "#4f45e2" : "inherit" }}
            >
              Home
            </p>
          </Link>
          <Link to="/about" onClick={() => handleLinkClick("/about")}>
            <p
              className="py-2 text-[1rem] hover:opacity-40"
              style={{ color: activeTab === "/about" ? "#4f45e2" : "inherit" }}
            >
              About
            </p>
          </Link>
          <Link to="/services" onClick={() => handleLinkClick("/services")}>
            <p
              className="py-2 text-[1rem] hover:opacity-40"
              style={{
                color: activeTab === "/services" ? "#4f45e2" : "inherit",
              }}
            >
              Services
            </p>
          </Link>
          <Link to="careers" onClick={() => handleLinkClick("/careers")}>
            <p
              className="py-2 text-[1rem] hover:opacity-40"
              style={{
                color: activeTab === "/careers" ? "#4f45e2" : "inherit",
              }}
            >
              Careers
            </p>
          </Link>
          <Link to="/contact" onClick={() => handleLinkClick("/contact")}>
            <p
              className="py-2 text-[1rem] hover:opacity-40"
              style={{
                color: activeTab === "/contact" ? "#4f45e2" : "inherit",
              }}
            >
              Contact Us
            </p>
          </Link>
          <Link to="/legal" onClick={() => handleLinkClick("/legal")}>
            <p
              className="py-2 text-[1rem] hover:opacity-40"
              style={{ color: activeTab === "/legal" ? "#4f45e2" : "inherit" }}
            >
              Legal
            </p>
          </Link>
          <Link to="/contact" onClick={() => handleLinkClick("/contact")}>
            <p className="py-3 text-[1rem] my-2 mx-2 bg-[#4f45E2] rounded-lg text-[#ffffff] w-full text-center hover:opacity-40">
              Get Started
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
