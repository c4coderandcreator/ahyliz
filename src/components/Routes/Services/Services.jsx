import React from "react";
import Plu from "../../Home/Plu";
import { Link } from "react-router-dom";
import HomeSecBg from "../../HomeSecBg/HomeSecBg";

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
      {/* section 2 */}
      <div className="bg-cover bg-[#f4f9ff] px-4 sm:px-[7.5rem] py-4 sm:py-20">
        <div className="flex items-center justify-center w-full ">
          <div className="flex justify-center w-full sm:w-[11rem] gap-2 px-1 py-4 bg-white rounded-[2rem]">
            <div className=" ">
              <img
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/1b251821991e6d732a7b9976d6ac2ff9841a5b28/Resources/Home/Icons/like-tag.svg"
                alt="img"
              />
            </div>
            <div className="text-center font-[CamptonMedium] text-[1.25rem]">
              <p>About us</p>
            </div>
          </div>
        </div>
        <p className="text-center font-[CamptonBold] text-[2rem] my-4">
          Leading the Way in Tailored IT Solutions
        </p>
        <p className="text-center font-[CamptonBook] text-[1.25rem]">
          Pioneering excellence in technology services
        </p>

        <div className="flex flex-wrap my-[5rem] gap-[3.125rem] justify-center">
          <div>
            {" "}
            <HomeSecBg />{" "}
          </div>

          <div className="w-[44.56rem] h-[33.5rem]">
            <p className="font-[CamptonBold] text-[1.5rem] leading-8">
              Welcome to Ahyliz Technologies - Pioneers of Digital Innovation.{" "}
            </p>
            <p className="font-[CamptonBook] text-[1rem] py-4">
              As leaders in Enterprise Digital Transformation, Cloud Consulting,
              Managed IT Services, and Software Development, we provide
              businesses with the sophisticated technology frameworks essential
              for excelling in today's dynamic digital environment. <br />{" "}
              <br />
              Explore our comprehensive IT solutions and discover how they can
              revolutionize your business operations, propelling you to a
              substantial competitive edge.
            </p>
            <div className="flex gap-4 font-[CamptonSemiBold] text-[1.25rem]  py-6 items-center">
              <div>
                <img
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/1b251821991e6d732a7b9976d6ac2ff9841a5b28/Resources/Home/Icons/Software%20Engg.svg"
                  alt="img"
                />
              </div>
              <div>
                <p>Software Development</p>
              </div>
            </div>
            <div className="flex gap-4 font-[CamptonSemiBold] text-[1.25rem]  pb-6 items-center">
              <div>
                <img
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/1b251821991e6d732a7b9976d6ac2ff9841a5b28/Resources/Home/Icons/Software%20Engg-1.svg"
                  alt="img"
                />
              </div>
              <div>
                <p>Cybersecurity</p>
              </div>
            </div>
            <div className="flex gap-4 font-[CamptonSemiBold] text-[1.25rem]  pb-6 items-center">
              <div>
                <img
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/1b251821991e6d732a7b9976d6ac2ff9841a5b28/Resources/Home/Icons/Software%20Engg-2.svg"
                  alt="img"
                />
              </div>
              <div>
                <p>Cloud Computing</p>
              </div>
            </div>
            <Link to="/about">
              <p className="py-4 px-8 bg-[#4f45e2] text-white w-[9.125rem] rounded-lg font-[CamptonBook] hover:opacity-40">
                Read More
              </p>
            </Link>
          </div>
        </div>
      </div>

      <Plu />
    </>
  );
};

export default Services;
