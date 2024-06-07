import React from "react";
import Plu from "../../Home/Plu";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      {/* section 1 */}
      <div className="flex p-6 sm:p-20 sm:mx-10 justify-between">
        <div className="sm:text-[1.25rem] sm:mr-20 al">
          <div className="flex">
            <div>
              <img
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/42a9b7f29a07ac9f0abf60584a89e918ec8aa762/Resources/Home/Icons/like.svg"
                alt="img"
              />
            </div>
            <div className="sm:mx-2 font-[CamptonMedium] pb-4">
              <p>Comprehensive IT Solutions</p>
            </div>
          </div>
          <p className="text-[3.5rem] sm:text-[4.5rem] font-[CamptonBold] leading-[4.875rem]">
            Explore Range of <br /> Tailored <br /> Solutions
          </p>
          <p className="py-2">
            Empowering Your Business with Advanced Technology <br /> Services
          </p>
          <div className="flex items-center mt-8 font-[CamptonBook]">
            <Link to="/contact">
              <p className="px-7 py-3 bg-[#4f45e2] rounded-lg text-white hover:opacity-40">
                Get Started
              </p>
            </Link>
          </div>

          <div className="flex text-[#4f45e2] text-[1rem] py-6">
            <div>
              <p className="tracking-[0.3rem] font-[CamptonSemiBold]">
                FOLLOW US
              </p>
            </div>
            <div className="flex">
              <Link to="https://www.instagram.com/">
                <img
                  className="pl-6 pr-2 hover:opacity-40"
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/42a9b7f29a07ac9f0abf60584a89e918ec8aa762/Resources/Home/Icons/Group%20171.svg"
                  alt="insta"
                />
              </Link>
              <Link to="https://www.linkedin.com/">
                <img
                  className="px-2 hover:opacity-40"
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/42a9b7f29a07ac9f0abf60584a89e918ec8aa762/Resources/Home/Icons/Group%20170.svg"
                  alt="linkedin"
                />
              </Link>

              <Link to="https://www.x.com/">
                <img
                  className="px-2 hover:opacity-40"
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/42a9b7f29a07ac9f0abf60584a89e918ec8aa762/Resources/Home/Icons/Path%208.svg"
                  alt="x.com"
                />
              </Link>

              <Link to="https://www.facebook.com/">
                <img
                  className="px-2 hover:opacity-40"
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/42a9b7f29a07ac9f0abf60584a89e918ec8aa762/Resources/Home/Icons/facebook.svg"
                  alt="facebook"
                />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-[29.375rem] w-[38.187rem] ml-20 hidden sm:block"
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/2d20f17dc2478772f51aebff3c065fc1109b5fab/Resources/Services/Illustration%202.svg"
            alt="img"
          />
        </div>
      </div>
      <Plu />
    </>
  );
};

export default Services;
