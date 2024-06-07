import React from "react";
import { Link } from "react-router-dom";

const Careers = () => {
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
              <p>Join Our Team</p>
            </div>
          </div>
          <p className="text-[3.5rem] sm:text-[4.5rem] font-[CamptonBold] leading-[4.875rem]">
            Empower Your <br /> Potential
          </p>
          <p className="py-2">
            Discover Opportunities for Growth and Innovation
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
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Careers/Illustration.png"
            alt="img"
          />
        </div>
      </div>
      {/* section 2 */}
      <div className="flex items-center justify-center w-full ">
        <div
          className="flex justify-center w-full sm:w-[21rem] gap-2 px-1 py-4 bg-white rounded-[2rem]"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <div className=" ">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/1b251821991e6d732a7b9976d6ac2ff9841a5b28/Resources/Home/Icons/like-tag.svg"
              alt="img"
            />
          </div>
          <div className="text-center font-[CamptonMedium] text-[1.25rem]">
            <p>Check For New Openings</p>
          </div>
        </div>
      </div>
      <p className="text-center font-[CamptonBold] text-[2rem] my-[1rem]">
        Ready to be stretched to reach your fullest potential?
      </p>
      <p className="text-center font-[CamptonBook] text-[1.25rem] mb-[2rem]">
        Take your skills and passion to the next level
      </p>

      <div className="flex justify-evenly my-[5rem]">
        {/* 1st */}
        <div
          className="p-[2rem]"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <div className="flex flex-col justify-between">
            <div className="flex">
              <div>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="23.5"
                    fill="#F4F9FF"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="23.5"
                    stroke="#E8ECF4"
                  />
                  <path
                    d="M26.5 23.4H21.5C21.09 23.4 20.75 23.06 20.75 22.65C20.75 22.24 21.09 21.9 21.5 21.9H26.5C26.91 21.9 27.25 22.24 27.25 22.65C27.25 23.06 26.91 23.4 26.5 23.4Z"
                    fill="#4F45E2"
                  />
                  <path
                    d="M24 25.96C23.59 25.96 23.25 25.62 23.25 25.21V20.21C23.25 19.8 23.59 19.46 24 19.46C24.41 19.46 24.75 19.8 24.75 20.21V25.21C24.75 25.62 24.41 25.96 24 25.96Z"
                    fill="#4F45E2"
                  />
                  <path
                    d="M31.0701 34.75C30.5601 34.75 30.0001 34.6 29.4601 34.29L24.5801 31.58C24.2901 31.42 23.7201 31.42 23.4301 31.58L18.5501 34.29C17.5601 34.84 16.5501 34.9 15.7801 34.44C15.0101 33.99 14.5701 33.08 14.5701 31.95V17.86C14.5701 15.32 16.6401 13.25 19.1801 13.25H28.8301C31.3701 13.25 33.4401 15.32 33.4401 17.86V31.95C33.4401 33.08 33.0001 33.99 32.2301 34.44C31.8801 34.65 31.4801 34.75 31.0701 34.75ZM24.0001 29.96C24.4701 29.96 24.9301 30.06 25.3001 30.27L30.1801 32.98C30.6901 33.27 31.1601 33.33 31.4601 33.15C31.7601 32.97 31.9301 32.54 31.9301 31.95V17.86C31.9301 16.15 30.5301 14.75 28.8201 14.75H19.1801C17.4701 14.75 16.0701 16.15 16.0701 17.86V31.95C16.0701 32.54 16.2401 32.98 16.5401 33.15C16.8401 33.32 17.3101 33.27 17.8201 32.98L22.7001 30.27C23.0701 30.06 23.5301 29.96 24.0001 29.96Z"
                    fill="#4F45E2"
                  />
                </svg>
              </div>
              <div></div>
              <div>
                <p className="font-[CamptonSemiBold] text-[2rem]">
                  Full Stack Developer
                </p>
                <p>
                  {" "}
                  <span>Full Time</span> <span> 1-3 Years</span>
                </p>
              </div>
            </div>
            <div>
              <div className="flex">
                <img src="" alt="" />
                <p>USD $100k - $120k</p>
              </div>
              <div className="flex">
                <img src="" alt="" />
                <p>Toronto, Canada</p>
              </div>
              <div className="flex">
                <img src="" alt="" />
                <p>June 15, 2024</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p>Posted 15 days ago</p>
              </div>
              <div>
                <p>Apply Now</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd */}
        <div
          className="p-[2rem]"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <div className="flex flex-col justify-between">
            <div>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="23.5"
                  fill="#F4F9FF"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="23.5"
                  stroke="#E8ECF4"
                />
                <path
                  d="M26.5 23.4H21.5C21.09 23.4 20.75 23.06 20.75 22.65C20.75 22.24 21.09 21.9 21.5 21.9H26.5C26.91 21.9 27.25 22.24 27.25 22.65C27.25 23.06 26.91 23.4 26.5 23.4Z"
                  fill="#4F45E2"
                />
                <path
                  d="M24 25.96C23.59 25.96 23.25 25.62 23.25 25.21V20.21C23.25 19.8 23.59 19.46 24 19.46C24.41 19.46 24.75 19.8 24.75 20.21V25.21C24.75 25.62 24.41 25.96 24 25.96Z"
                  fill="#4F45E2"
                />
                <path
                  d="M31.0701 34.75C30.5601 34.75 30.0001 34.6 29.4601 34.29L24.5801 31.58C24.2901 31.42 23.7201 31.42 23.4301 31.58L18.5501 34.29C17.5601 34.84 16.5501 34.9 15.7801 34.44C15.0101 33.99 14.5701 33.08 14.5701 31.95V17.86C14.5701 15.32 16.6401 13.25 19.1801 13.25H28.8301C31.3701 13.25 33.4401 15.32 33.4401 17.86V31.95C33.4401 33.08 33.0001 33.99 32.2301 34.44C31.8801 34.65 31.4801 34.75 31.0701 34.75ZM24.0001 29.96C24.4701 29.96 24.9301 30.06 25.3001 30.27L30.1801 32.98C30.6901 33.27 31.1601 33.33 31.4601 33.15C31.7601 32.97 31.9301 32.54 31.9301 31.95V17.86C31.9301 16.15 30.5301 14.75 28.8201 14.75H19.1801C17.4701 14.75 16.0701 16.15 16.0701 17.86V31.95C16.0701 32.54 16.2401 32.98 16.5401 33.15C16.8401 33.32 17.3101 33.27 17.8201 32.98L22.7001 30.27C23.0701 30.06 23.5301 29.96 24.0001 29.96Z"
                  fill="#4F45E2"
                />
              </svg>
            </div>
            <div>
              <p className="font-[CamptonSemiBold] text-[2rem]">
                Full Stack Developer
              </p>
              <p>
                {" "}
                <span>Full Time</span> <span> 1-3 Years</span>
              </p>
            </div>
            <div>
              <div className="flex">
                <img src="" alt="" />
                <p>USD $100k - $120k</p>
              </div>
              <div className="flex">
                <img src="" alt="" />
                <p>Toronto, Canada</p>
              </div>
              <div className="flex">
                <img src="" alt="" />
                <p>June 15, 2024</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p>Posted 15 days ago</p>
              </div>
              <div>
                <p>Apply Now</p>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default Careers;
