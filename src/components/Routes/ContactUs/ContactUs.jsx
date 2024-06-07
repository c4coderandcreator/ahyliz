import React from "react";
import Faq from "../../Home/Faq";
import Contact from "../../Home/Contact";
import { Link } from "react-router-dom";

const ContactUs = () => {
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
              <p>Let’s Start a Conversation</p>
            </div>
          </div>
          <p className="text-[3.5rem] sm:text-[4.5rem] font-[CamptonBold] leading-[4.875rem]">
            Reach Out to Us <br /> Today
          </p>
          <p className="py-2">
            Our experts are available to answer any questions you <br /> might
            have. We’ve got the answers.
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
        <div className="h-[29.375rem] w-[38.187rem] ml-20 hidden sm:block">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/ContactUs/Illustration.png"
            alt="img"
          />
        </div>
      </div>
      {/* section 3 */}
      <div className="bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/cc834e1a601ad1b9321eb071efba4458b0bd7bfb/Resources/Home/Images/Dots%20SVG.svg')] bg-cover w-full h-[16.81rem] flex  items-center">
        <div className="flex flex-wrap justify-between items-center sm:mx-[7.5rem] sm:my-24 bg-[#f7f7f7] w-full rounded-lg">
          <div className="px-2 sm:px-8 py-3 font-[CamptonMedium] sm:font-[CamptonBold] text-[0.8rem] sm:text-[1.5rem]">
            Learn more about Ahyliz Technologies
          </div>
          <Link to="/services">
            <div className="px-2 mx-1 sm:px-4 py-3 sm:mx-8 my-2 sm:my-4 bg-[#4f45e2] rounded-3xl text-white text-[0.7rem] sm:text-[0.875rem] font-[CamptonMedium] sm:font-[CamptonBold] hover:opacity-40">
              {" "}
              See How It Works?
            </div>
          </Link>
        </div>
      </div>
      <Faq />
      <Contact />
    </>
  );
};

export default ContactUs;
