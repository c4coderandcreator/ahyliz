import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="mt-[18rem] sm:mt-0 h-full sm:h-[28.2rem] bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Images/bgFooter.png')] bg-cover flex flex-col text-white font-[Lufga-Light-2] text-[1rem]">
        <div className="flex flex-wrap justify-start sm:justify-center gap-4 sm:gap-16 sm:items-center sm:my-[5rem] sm:mx-[5rem] pl-4 sm:pl-0">
          <div className="h-full mt-8 sm:mt-0">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b2f528cfdd314c09d5f4d7256ac69296706a32b3/Resources/Home/LogoF.svg"
              alt="img"
            />
            <p className="text-[1rem]">Empowering Your Digital Future</p>
            <div className="flex gap-5 items-center py-3">
              <div>
                <img
                  className="hover:opacity-40"
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Icons/instagram.png"
                  alt="insta"
                />
              </div>
              <div>
                <img
                  className="hover:opacity-40"
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Icons/linkedin.png"
                  alt="linkedin"
                />
              </div>
              <div>
                <img
                  className="hover:opacity-40"
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Icons/twitter.png"
                  alt="twitter"
                />
              </div>
              <div>
                <img
                  className="hover:opacity-40"
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Icons/facebook.png"
                  alt="facebook"
                />
              </div>
            </div>
          </div>
          <div className="sm:border-r sm:border-l border-custom-rgba px-14 leading-[2.2rem]">
            <p className="font-[Lufga-Bold-2] text-[1.5rem]">Home</p>
            <Link to="/about">
              <p className="hover:opacity-40">Explore more</p>
            </Link>
            <Link to="/services">
              <p className="hover:opacity-40">Services we offer</p>
            </Link>
            <Link to="/careers">
              <p className="hover:opacity-40">Careers</p>
            </Link>{" "}
            <p className="hover:opacity-40">FAQs</p>
            <Link to="/contact">
              <p className="hover:opacity-40">Contact us</p>
            </Link>
          </div>
          <div className="sm:border-r border-custom-rgba pr-14 leading-[2.2rem]">
            <p className="font-[Lufga-Bold-2] text-[1.5rem]">About us</p>
            <p className="hover:opacity-40">How it Works?</p>
            <p className="hover:opacity-40">Our Team</p>
            <Link to="/legal">
              <p className="hover:opacity-40">Privacy Policy</p>
            </Link>
            <Link to="/legal">
              <p className="hover:opacity-40">Terms of use</p>
            </Link>
            <p className="hover:opacity-40">Accessibility</p>
          </div>
          <div className="sm:border-r border-custom-rgba h-full pr-14 leading-[2.2rem]">
            <p className="font-[Lufga-Bold-2] text-[1.5rem] ">Address</p>
            <Link
              to="https://maps.app.goo.gl/MaYpmND9nCKTXZVA9"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="hover:opacity-40">
                34 Minowan Miikan Ln,
                <br /> Toronto, ON <br /> Canada <br /> M6J 0G3
              </p>
            </Link>
          </div>
          <div className="sm:border-r border-custom-rgba h-full pr-14 leading-[2.2rem] pb-4 sm:pb-0">
            <p className="font-[Lufga-Bold-2] text-[1.5rem]">Contact us</p>
            <Link to="tel:+1 (844) 400-7222">
              <p className="hover:opacity-40">Tel: +1 (844) 400-7222</p>
            </Link>

            <p className="hover:opacity-40">Fax: +1 (844) 709-7333</p>
            <Link to="mailto:info@ahyliz.ca">
              <p className="hover:opacity-40">Email: info@ahyliz.ca</p>
            </Link>

            {/* <Link to="mailto:contact@ahyliz.ca">
              <p className="hover:opacity-40">Email: contact@ahyliz.ca</p>
            </Link> */}
          </div>
        </div>
        <div className="border-t border-custom-rgba flex items-center justify-center text-center py-6 sm:py-7 text-[0.875rem]">
          © 2024 Ahyliz Technologies | All rights reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
