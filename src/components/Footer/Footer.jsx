import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <div className="mt-[15rem] sm:mt-0 h-auto lg:h-[28.2rem] bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Images/bgFooter.png')] bg-cover  text-white font-[LufgaLight] text-[1rem]">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 pt-[5rem] justify-start sm:justify-between gap-4 lg:gap-16 sm:items-center sm:my-[5rem] lg:mx-[5rem] pl-4 sm:pl-0">
          <div className="justify-self-auto h-full mt-8 sm:mt-0">
            <img
              className="w-[11.5rem] h-[5rem] mb-4"
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/AT%20LOGO-W.png"
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
          <div className="justify-self-auto sm:border-r sm:border-l border-custom-rgba lg:px-14 leading-[2.2rem] lg:pl-4 h-full">
            <p className="font-[LufgaBold] text-[1.5rem]">Home</p>
            <Link to="/about">
              <p className="hover:opacity-40">Explore more</p>
            </Link>
            <Link to="/services">
              <p className="hover:opacity-40">Services we offer</p>
            </Link>
            <Link to="/careers">
              <p className="hover:opacity-40">Careers</p>
            </Link>{" "}
            <HashLink to="/contact#faq">
              <p className="hover:opacity-40">FAQs</p>
            </HashLink>
            <Link to="/contact">
              <p className="hover:opacity-40">Contact us</p>
            </Link>
          </div>
          <div className="justify-self-auto sm:border-r border-custom-rgba lg:px-14 leading-[2.2rem] h-full">
            <p className="font-[LufgaBold] text-[1.5rem]">About us</p>
            <Link to="/services">
              <p className="hover:opacity-40">How it Works?</p>
            </Link>
            <HashLink to="/about#ot">
              <p className="hover:opacity-40">Our Team</p>
            </HashLink>

            <HashLink to="/legal#pp">
              <p className="hover:opacity-40">Privacy Policy</p>
            </HashLink>
            <HashLink to="/legal#tou">
              <p className="hover:opacity-40">Terms of use</p>
            </HashLink>
            <HashLink to="/contact#acc">
              <p className="hover:opacity-40">Accessibility</p>
            </HashLink>
          </div>
          <div className="justify-self-auto sm:border-r border-custom-rgba lg:px-6 h-full leading-[2.2rem]">
            <p className="font-[LufgaBold] text-[1.5rem] ">Address</p>
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
          <div className="justify-self-auto sm:border-r border-custom-rgba lg:px-6 h-full leading-[2.2rem] pb-4 sm:pb-0">
            <p className="font-[LufgaBold] text-[1.5rem]">Contact us</p>
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
