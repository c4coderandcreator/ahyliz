import React from "react";
import Faq from "../../Home/Faq";
import Plu from "../../Home/Plu";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full mt-[5rem] ">
        <div
          className="flex justify-center w-full sm:w-[11rem] gap-2 px-1 py-4 bg-white rounded-[2rem]"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
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
      <p className="text-center font-[CamptonBold] text-[4.5rem] my-4">
        Leading the Way in Tailored IT Solutions
      </p>
      <p className="text-center font-[CamptonBook] text-[1.25rem]">
        Empowering Your Digital Future
      </p>
      <div className="flex items-center mt-8 font-[CamptonBook] w-full justify-center">
        <Link to="/about">
          <p className="px-[2rem] py-[0.8rem] bg-[#4f45e2] rounded-lg text-white hover:opacity-40">
            Hire us
          </p>
        </Link>
      </div>

      <div className="flex items-center justify-center text-[#4f45e2] text-[1rem] py-6">
        <div>
          <p className="tracking-[0.3rem] font-[CamptonSemiBold]">FOLLOW US</p>
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
      {/* section 3 */}
      <div className="bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/cc834e1a601ad1b9321eb071efba4458b0bd7bfb/Resources/Home/Images/Dots%20SVG.svg')] bg-cover w-full h-[16.81rem] flex  items-center">
        <div className="flex flex-wrap justify-center gap-20 items-center sm:my-24 w-full rounded-lg">
          <div className="text-center">
            <p className="font-[CamptonExtraBold] text-[#4f45e2] text-[2rem]">
              200+
            </p>
            <p className="font-[CamptonBook] text-[2rem]">Clients Worldwide</p>
          </div>
          <div className="text-center">
            <p className="font-[CamptonExtraBold] text-[#4f45e2] text-[2rem]">
              800+
            </p>
            <p className="font-[CamptonBook] text-[2rem]">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="font-[CamptonExtraBold] text-[#4f45e2] text-[2rem]">
              100%
            </p>
            <p className="font-[CamptonBook] text-[2rem]">
              Customer Satisfaction
            </p>
          </div>
        </div>
      </div>

      <Plu />

      <Faq />
    </>
  );
};

export default About;
