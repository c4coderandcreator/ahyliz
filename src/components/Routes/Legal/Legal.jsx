import React from "react";
import Contact from "../../Home/Contact";
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <>
      <div className="bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/d61df2fc5f24d552268b46a9ea3bf0dd09530661/Resources/Legal/Hero.svg')] bg-cover">
        <div className="flex items-center justify-center w-full pt-[5rem]  ">
          <div
            className=" flex justify-center w-full sm:w-[11rem] gap-2 px-1 py-4 bg-white rounded-[2rem]"
            style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
          >
            <div className=" ">
              <img
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/1b251821991e6d732a7b9976d6ac2ff9841a5b28/Resources/Home/Icons/like-tag.svg"
                alt="img"
              />
            </div>
            <div className="text-center font-[CamptonMedium] text-[1.25rem]">
              <p>Legal</p>
            </div>
          </div>
        </div>
        <p className="text-center text-white font-[CamptonBold] text-[4.5rem] my-4">
          Learn How We Safeguard Your Data
        </p>
        <p className="text-center text-white font-[CamptonBook] text-[1.25rem]">
          Our Commitment to Keeping Your Information Secure
        </p>
        <div className="flex items-center mt-8 font-[CamptonBook] w-full justify-center">
          <Link to="/about">
            <p className="px-[2rem] py-[0.8rem] bg-white rounded-lg text-[#4f45e2] hover:opacity-40">
              Contact us
            </p>
          </Link>
        </div>

        <div className="flex items-center justify-center text-white text-[1rem] py-6 pb-[4.5rem]">
          <div>
            <p className="tracking-[0.3rem] font-[CamptonSemiBold] mr-6">
              FOLLOW US
            </p>
          </div>
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
      </div>
      <Contact />
    </>
  );
};

export default Legal;
