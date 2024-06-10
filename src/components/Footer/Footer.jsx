import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="mt-[18rem] sm:mt-0 h-full sm:h-[26rem] bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Images/bgFooter.png')] bg-cover flex flex-col text-white font-[Lufga-Light-2] text-[1.25rem]">
        <div className="flex flex-wrap justify-start sm:justify-center gap-4 sm:gap-16 sm:items-center sm:my-[5rem] sm:mx-[5rem] pl-4 sm:pl-0">
          <div className="h-full mt-8 sm:mt-0">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/9e38a1525ab1632548ca85384952b0b9d8bd9dd2/Resources/Home/Images/Logo-1.svg"
              alt="img"
            />
            <p className="text-[1rem]">
              Empowering Your Digital <br className="hidden sm:block" /> Future
            </p>
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
          <div className="sm:border-r border-custom-rgba pr-14 leading-[2.2rem]">
            <p className="font-[Lufga-Bold-2]">Home</p>
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
            <p className="font-[Lufga-Bold-2]">About us</p>
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
            <p className="font-[Lufga-Bold-2]">Address</p>
            <p>
              34 Minowan Miikan <br /> Lane, Toronto, ON <br /> M6J 0G3
            </p>
          </div>
          <div className="sm:border-r border-custom-rgba h-full pr-14 leading-[2.2rem] pb-4 sm:pb-0">
            <p className="font-[Lufga-Bold-2]">Contact us</p>
            <Link to="tel:+1 (844) 400-7222">
              <p className="hover:opacity-40">Tel: +1 (844) 400-7222</p>
            </Link>

            <p className="hover:opacity-40">Fax: +1 (844) 709-7333</p>
            <Link to="mailto:info@ahyliz.ca">
              <p className="hover:opacity-40">Email: info@ahyliz.ca</p>
            </Link>

            <Link to="mailto:contact@ahyliz.ca">
              <p className="hover:opacity-40">Email: contact@ahyliz.ca</p>
            </Link>
          </div>
        </div>
        <div className="border-t border-custom-rgba flex items-center justify-center text-center py-6 sm:py-3 text-[0.875rem]">
          © 2024 Rights Reserved By Ahyliz Technologies
        </div>
      </div>
    </>
  );
};

export default Footer;
