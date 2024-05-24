import React from "react";
import Navbar from "../Navbar/Navbar";
import HomeSecBg from "../HomeSecBg/HomeSecBg";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* section 1 */}
      <div className="flex p-20 mx-10 justify-between">
        <div className="text-[1.25rem] mr-20 al">
          <div className="flex">
            <div>
              <img
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/42a9b7f29a07ac9f0abf60584a89e918ec8aa762/Resources/Home/Icons/like.svg"
                alt="img"
              />
            </div>
            <div className="mx-2 font-[CamptonMedium] pb-4">
              <p>Welcome To Ahyliz Technologies</p>
            </div>
          </div>
          <p className="text-[4.5rem] font-[CamptonBold] leading-[4.875rem]">
            Leading the <br /> Way in Digital <br /> Innovation.
          </p>
          <p className="py-2">Empowering Your Digital Future</p>
          <div className="flex items-center mt-8 font-[CamptonBook]">
            <p className="px-7 py-3 bg-[#4f45e2] rounded-lg text-white">
              Explore more
            </p>
            <p className="ml-14 text-[#4f45e2]">contact us</p>
          </div>

          <div className="flex text-[#4f45e2] text-[1rem] py-6">
            <div>
              <p className="tracking-[0.3rem] font-[CamptonSemiBold]">
                FOLLOW US
              </p>
            </div>
            <div className="flex">
              <img
                className="pl-6 pr-2"
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/42a9b7f29a07ac9f0abf60584a89e918ec8aa762/Resources/Home/Icons/Group%20171.svg"
                alt="insta"
              />
              <img
                className="px-2"
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/42a9b7f29a07ac9f0abf60584a89e918ec8aa762/Resources/Home/Icons/Group%20170.svg"
                alt="linkedin"
              />
              <img
                className="px-2"
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/42a9b7f29a07ac9f0abf60584a89e918ec8aa762/Resources/Home/Icons/Path%208.svg"
                alt="x.com"
              />
              <img
                className="px-2"
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/42a9b7f29a07ac9f0abf60584a89e918ec8aa762/Resources/Home/Icons/facebook.svg"
                alt="facebook"
              />
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-[29.375rem] w-[38.187rem] ml-20"
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/42a9b7f29a07ac9f0abf60584a89e918ec8aa762/Resources/Home/Images/Illustration.svg"
            alt="img"
          />
        </div>
      </div>
      {/* section 2 */}
      <div className="bg-cover bg-[#f4f9ff] px-[7.5rem] py-20">
        <div className="flex items-center justify-center w-full ">
          <div className="flex justify-center w-[11rem] gap-2 px-1 py-4 bg-white rounded-[2rem]">
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

        <div className="flex my-[5rem] gap-[3.125rem] justify-center">
          <div>
            {" "}
            <HomeSecBg />{" "}
          </div>
          {/* <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center items-center h-[11.7rem] w-[15.4rem] bg-[#f8f9fa] border-2 rounded-tl-lg">
              <p className="font-[CamptonExtraBold] text-[#5cc9a7] text-[2.25rem]">
                60
              </p>
              <p>Clients Worldwide</p>
            </div>
            <div className="flex flex-col justify-center items-center h-[11.7rem] w-[15.4rem] bg-white rounded-tr-lg border-t-2 border-b-2 border-r-2">
              <p className="font-[CamptonExtraBold] text-[#4545e2] text-[2.25rem]">
                21
              </p>
              <p>Team Members</p>
            </div>
            <div className="flex flex-col justify-center items-center h-[11.7rem] w-[15.4rem] bg-white border-l-2 border-r-2">
              <p className="font-[CamptonExtraBold] text-black text-[2.25rem]">
                96%
              </p>
              <p>Client Retention</p>
            </div>
            <div className="flex flex-col justify-center items-center h-[11.7rem] w-[15.4rem] bg-[#f8f9fa]   border-r-2">
              <p className="font-[CamptonExtraBold] text-[#ffb116] text-[2.25rem]">
                11 Years
              </p>
              <p>In Business</p>
            </div>
            <div className="flex flex-col justify-center items-center h-[11.7rem] w-[15.4rem] bg-[#f8f9fa] border-2 rounded-bl-lg">
              <p className="font-[CamptonExtraBold] text-[#4f45e2] text-[2.25rem]">
                100+
              </p>
              <p>Projects Completed</p>
            </div>
            <div className="flex flex-col justify-center items-center h-[11.7rem] w-[15.4rem] bg-white rounded-br-lg border-t-2 border-r-2 border-b-2">
              <p className="font-[CamptonExtraBold] text-[#5cc9a7] text-[2.25rem]">
                24/7
              </p>
              <p>IT Support</p>
            </div>
          </div> */}
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
            <p className="py-4 px-8 bg-[#4f45e2] text-white w-[9.125rem] rounded-lg font-[CamptonBook]">
              Read More
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center text-center gap-[6rem] mx-[4rem]">
          <div className="flex flex-col items-center">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/1b251821991e6d732a7b9976d6ac2ff9841a5b28/Resources/Home/Images/Group%20174.svg"
              alt="img"
            />{" "}
            <p className="font-[CamptonBold] text-[1.25rem] pt-3 pb-5">
              Leading IT Service <br />
              Provider
            </p>
            <p className="font-[CamptonBook]">
              Ahyliz Technologies stands at the forefront of the industry,
              providing innovative IT solutions tailored to meet the evolving
              needs of businesses.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/1b251821991e6d732a7b9976d6ac2ff9841a5b28/Resources/Home/Images/Group%20172.svg"
              alt="img"
            />{" "}
            <p className="font-[CamptonBold] text-[1.25rem] pt-3 pb-5">
              Exceeding Client <br /> Expectations
            </p>
            <p className="font-[CamptonBook]">
              Our commitment to excellence ensures that we go above and beyond
              to deliver solutions that surpass the expectations of our clients,
              driving tangible business results.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/1b251821991e6d732a7b9976d6ac2ff9841a5b28/Resources/Home/Images/Group%20173.svg"
              alt="img"
            />{" "}
            <p className="font-[CamptonBold] text-[1.25rem] pt-3 pb-5">
              Driving Business <br /> Growth
            </p>
            <p className="font-[CamptonBook]">
              By leveraging cutting-edge technology and strategic expertise, we
              empower businesses to achieve substantial growth and operational
              efficiency.
            </p>
          </div>
        </div>
      </div>
      {/* Our Services */}
      <div className=" px-[7.5rem] py-20">
        <div className="flex items-center justify-center w-full items-center ">
          <div
            className="flex justify-center w-[12rem] gap-2 px-1 py-4 bg-white rounded-[2rem]"
            style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
          >
            <div className=" ">
              <img
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/7e01a007bc0a98219646723422c92004dcff90de/Resources/Home/Icons/star.svg"
                alt="img"
              />
            </div>
            <div className="text-center font-[CamptonMedium] text-[1.25rem] ">
              <p>Our Services</p>
            </div>
          </div>
        </div>
        <p className="text-center font-[CamptonBold] text-[2rem] my-4">
          Elevating Your Business with Tailored Solutions
        </p>
        <p className="text-center font-[CamptonBook] text-[1.25rem]">
          Get your self ready for the most comprehensive solutions
        </p>
        <div className="flex justify-center pt-[5rem] gap-2 w-full font-[CamptonBook]">
          <div className="text-right w-[22.5rem]">
            <p className="font-[CamptonSemiBold] text-[1.25rem]">
              Enterprise Digital <br /> Transformation
            </p>
            <p className="pb-[6.5rem]">
              Transform your business with Ahyliz <br /> Technologies'
              comprehensive Enterprise Digital <br /> Transformation
            </p>
            <p className="font-[CamptonSemiBold] text-[1.25rem]">
              Software Development
            </p>
            <p>
              Drive innovation and efficiency with Ahyliz <br /> Technologies'
              Software Development services.
            </p>
          </div>
          <div className="w-[31.18rem]">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/7e01a007bc0a98219646723422c92004dcff90de/Resources/Home/Images/Group%201000004731.svg"
              alt="img"
            />
          </div>
          <div className="w-[22.5rem]">
            <p className="font-[CamptonSemiBold] text-[1.25rem]">
              Cloud Consulting Services
            </p>
            <p className="pb-[8.7rem]">
              Navigate the complexities of cloud <br /> environments with Ahyliz
              Technologies' Cloud <br /> Consulting services.
            </p>
            <p className="font-[CamptonSemiBold] text-[1.25rem]">
              Managed IT Services
            </p>
            <p>
              Ensure uninterrupted business operations with <br /> Ahyliz
              Technologies' Managed IT Services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
