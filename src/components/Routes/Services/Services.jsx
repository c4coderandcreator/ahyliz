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
      <div className="bg-cover bg-[#f4f9ff] px-4 sm:px-[7.5rem] py-4 sm:py-10">
        <div className="flex items-center justify-center w-full ">
          <div className="flex justify-center w-full sm:w-[12rem] gap-2 px-1 py-4 bg-white rounded-[2rem]">
            <div className=" ">
              <img
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/1b251821991e6d732a7b9976d6ac2ff9841a5b28/Resources/Home/Icons/like-tag.svg"
                alt="img"
              />
            </div>
            <div className="text-center font-[CamptonMedium] text-[1.25rem]">
              <p>Our Services</p>
            </div>
          </div>
        </div>
        <p className="text-center font-[CamptonBold] text-[2rem] my-4">
          Enterprise Digital Transformation
        </p>
        <p className="text-center font-[CamptonBook] text-[1.25rem]">
          Redefine your business for the digital age with us.
        </p>

        <div className="flex flex-wrap my-[5rem] gap-[3.125rem] justify-center">
          <div>
            {" "}
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Illustration.svg"
              alt="img"
            />
          </div>

          <div className="w-[44.56rem] h-[25.5rem]">
            <p className="font-[CamptonBold] text-[1.5rem] leading-8">
              Empower Your Business with a Strategic Overhaul
            </p>
            <p className="font-[CamptonBook] text-[1rem] py-4">
              At Ahyliz Technologies, Enterprise Digital Transformation is about
              thoroughly redefining your business to thrive in the digital era.
              We harness a variety of enterprise architecture platforms, such as
              TOGAF, Zachman, and FEAF, to ensure that our solutions are built
              on proven methodologies and frameworks.
              <br /> <br />
              Our comprehensive services are designed to drive operational
              excellence and spark innovation across your business.
            </p>
            <div className="flex gap-4 font-[CamptonSemiBold] text-[1.25rem]  py-6 items-center">
              <div>
                <img
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/1b251821991e6d732a7b9976d6ac2ff9841a5b28/Resources/Home/Icons/Software%20Engg.svg"
                  alt="img"
                />
              </div>
              <div>
                <p>Digital Strategy Development</p>
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
                <p>Technology Implementation</p>
              </div>
            </div>
            <div className="flex gap-4 font-[CamptonSemiBold] text-[1.25rem] items-center">
              <div>
                <img
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/1b251821991e6d732a7b9976d6ac2ff9841a5b28/Resources/Home/Icons/Software%20Engg-2.svg"
                  alt="img"
                />
              </div>
              <div>
                <p>Change Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <p className="text-center font-[CamptonBold] text-[2rem] mt-14 my-4">
        Managed IT Services
      </p>
      <p className="text-center font-[CamptonBook] text-[1.25rem]">
        Proactive IT Management for Uninterrupted Business Operations
      </p>
      <div className="grid grid-cols-3 gap-[3.25rem] mx-[7.5rem] my-[5rem]">
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame.svg"
            alt="img"
          />
          <p className="text-center font-[CamptonSemiBold] text-[1.25rem] py-8">
            Continuous Monitoring
          </p>
          <p className="text-left font-[CamptonBook]">
            We operate 24/7 system monitoring to swiftly identify and resolve
            potential issues before they disrupt your business operations.{" "}
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame.svg"
            alt="img"
          />
          <p className="text-center font-[CamptonSemiBold] text-[1.25rem] py-8">
            Continuous Monitoring
          </p>
          <p className="text-left font-[CamptonBook]">
            We operate 24/7 system monitoring to swiftly identify and resolve
            potential issues before they disrupt your business operations.{" "}
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame.svg"
            alt="img"
          />
          <p className="text-center font-[CamptonSemiBold] text-[1.25rem] py-8">
            Continuous Monitoring
          </p>
          <p className="text-left font-[CamptonBook]">
            We operate 24/7 system monitoring to swiftly identify and resolve
            potential issues before they disrupt your business operations.{" "}
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame.svg"
            alt="img"
          />
          <p className="text-center font-[CamptonSemiBold] text-[1.25rem] py-8">
            Continuous Monitoring
          </p>
          <p className="text-left font-[CamptonBook]">
            We operate 24/7 system monitoring to swiftly identify and resolve
            potential issues before they disrupt your business operations.{" "}
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame.svg"
            alt="img"
          />
          <p className="text-center font-[CamptonSemiBold] text-[1.25rem] py-8">
            Continuous Monitoring
          </p>
          <p className="text-left font-[CamptonBook]">
            We operate 24/7 system monitoring to swiftly identify and resolve
            potential issues before they disrupt your business operations.{" "}
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame.svg"
            alt="img"
          />
          <p className="text-center font-[CamptonSemiBold] text-[1.25rem] py-8">
            Continuous Monitoring
          </p>
          <p className="text-left font-[CamptonBook]">
            We operate 24/7 system monitoring to swiftly identify and resolve
            potential issues before they disrupt your business operations.{" "}
          </p>
        </div>
      </div>

      {/* section 3.5 */}
      <p className="font-[CamptonMedium] text-[1.25rem] pb-[5rem] text-center">
        Navigating your path to seamless integration
      </p>
      <div className=" sm:px-[7.5rem] py-20 bg-[#f4f9ff]">
        <div className="flex items-center justify-center my-8 rounded-2xl mt-[5rem]">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Images/Group%201000005288p.png"
            alt="img"
          />
        </div>
      </div>

      {/* section 4 */}
      <div className=" sm:px-[7.5rem] py-6 sm:py-20">
        <p className="text-center font-[CamptonBold] text-[2rem] my-4">
          Cloud Consulting
        </p>
        <p className="text-center font-[CamptonBook] text-[1.25rem]">
          Expert Guidance Through Your Cloud Journey
        </p>
        <div className="flex flex-wrap justify-center pt-[5rem] gap-4 sm:gap-2 w-full font-[CamptonBook]">
          <div className="text-left sm:text-right w-[22.5rem]">
            <p className="font-[CamptonSemiBold] text-[1.25rem]">
              Enterprise Digital <br /> Transformation
            </p>
            <p className="pb-4 sm:pb-[6.5rem]">
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
          <div className="w-[31.18rem] hidden sm:block">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/7e01a007bc0a98219646723422c92004dcff90de/Resources/Home/Images/Group%201000004731.svg"
              alt="img"
            />
          </div>
          <div className="w-[22.5rem]">
            <p className="font-[CamptonSemiBold] text-[1.25rem]">
              Cloud Consulting Services
            </p>
            <p className="pb-4 sm:pb-[8.7rem]">
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
      {/* section 5 */}
      <p className="text-center font-[CamptonBold] text-[2rem] mt-14 my-4">
        Software Development
      </p>
      <p className="text-center font-[CamptonBook] text-[1.25rem]">
        Tailored Software Solutions to Drive Business Innovation
      </p>
      <div className="grid grid-cols-3 gap-[3.25rem] mx-[7.5rem] my-[5rem]">
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame.svg"
            alt="img"
          />
          <p className="text-center font-[CamptonSemiBold] text-[1.25rem] py-8">
            Continuous Monitoring
          </p>
          <p className="text-left font-[CamptonBook]">
            We operate 24/7 system monitoring to swiftly identify and resolve
            potential issues before they disrupt your business operations.{" "}
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame.svg"
            alt="img"
          />
          <p className="text-center font-[CamptonSemiBold] text-[1.25rem] py-8">
            Continuous Monitoring
          </p>
          <p className="text-left font-[CamptonBook]">
            We operate 24/7 system monitoring to swiftly identify and resolve
            potential issues before they disrupt your business operations.{" "}
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame.svg"
            alt="img"
          />
          <p className="text-center font-[CamptonSemiBold] text-[1.25rem] py-8">
            Continuous Monitoring
          </p>
          <p className="text-left font-[CamptonBook]">
            We operate 24/7 system monitoring to swiftly identify and resolve
            potential issues before they disrupt your business operations.{" "}
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame.svg"
            alt="img"
          />
          <p className="text-center font-[CamptonSemiBold] text-[1.25rem] py-8">
            Continuous Monitoring
          </p>
          <p className="text-left font-[CamptonBook]">
            We operate 24/7 system monitoring to swiftly identify and resolve
            potential issues before they disrupt your business operations.{" "}
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame.svg"
            alt="img"
          />
          <p className="text-center font-[CamptonSemiBold] text-[1.25rem] py-8">
            Continuous Monitoring
          </p>
          <p className="text-left font-[CamptonBook]">
            We operate 24/7 system monitoring to swiftly identify and resolve
            potential issues before they disrupt your business operations.{" "}
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame.svg"
            alt="img"
          />
          <p className="text-center font-[CamptonSemiBold] text-[1.25rem] py-8">
            Continuous Monitoring
          </p>
          <p className="text-left font-[CamptonBook]">
            We operate 24/7 system monitoring to swiftly identify and resolve
            potential issues before they disrupt your business operations.{" "}
          </p>
        </div>
      </div>
      {/* section 6 */}
      <p className="font-[CamptonMedium] text-[1.25rem] pb-[5rem] text-center">
        Comprehensive IT and Software Solutions
      </p>

      <div className="flex justify-center mx-[6.25rem] gap-[2.5rem]">
        <div className="w-[30rem] h-[20em]">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/2dd276b069ec31c66a61541d02d48d501de8de3e/Resources/AboutUs/Frame.svg"
            alt="img"
          />
        </div>
        <div>
          <p className="font-[CamptonBook] text-[1.25rem] pb-[0.8rem] ">
            Ahyliz Technologies' commitment to giving back to the community{" "}
            <br />
            extends beyond mere words, as evidenced by its proactive engagement
            in <br />
            various Corporate Social Responsibility (CSR) projects.
          </p>
          <p className="font-[CamptonBook] text-[1.25rem] py-[0.8rem] ">
            These initiatives are carefully designed to make a tangible impact,{" "}
            <br />
            particularly in underprivileged areas where access to education and{" "}
            <br />
            technology is limited.
          </p>
        </div>
      </div>
      {/* section 7 */}
      <div className="bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/cc834e1a601ad1b9321eb071efba4458b0bd7bfb/Resources/Home/Images/Dots%20SVG.svg')] bg-cover w-full h-[16.81rem] flex  items-center">
        <div className="flex flex-wrap justify-between items-center sm:mx-[6.25rem] sm:my-24 bg-[#f7f7f7] w-full rounded-lg">
          <div className="px-2 sm:px-8 py-3 font-[CamptonMedium] sm:font-[CamptonBold] text-[0.8rem] sm:text-[1.5rem]">
            Learn more about Ahyliz Technologies
          </div>
          <Link to="/services">
            <div className="px-2 mx-1 sm:px-4 py-3 sm:py-4 sm:mx-8 my-2 sm:my-6 bg-[#4f45e2] rounded-3xl text-white text-[0.7rem] sm:text-[0.875rem] font-[CamptonMedium] sm:font-[CamptonBold] hover:opacity-40">
              {" "}
              See How It Works?
            </div>
          </Link>
        </div>
      </div>

      {/* WCU */}
      <div className="bg-cover bg-[#f4f9ff] py-4 sm:pt-10 px-[6.25rem] rounded-3xl">
        <div className="flex items-center justify-center w-full ">
          <div
            className="flex justify-center w-full sm:w-[15rem] gap-2 px-1 py-4 bg-white rounded-[2rem]"
            style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
          >
            <div className=" ">
              <img
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/1b251821991e6d732a7b9976d6ac2ff9841a5b28/Resources/Home/Icons/like-tag.svg"
                alt="img"
              />
            </div>
            <div className="text-center font-[CamptonMedium] text-[1.25rem]">
              <p>Why Choose us</p>
            </div>
          </div>
        </div>
        <p className="text-center font-[CamptonBold] text-[2rem] my-[1rem]">
          Why Ahyliz Technologies?
        </p>
        <p className="text-center font-[CamptonBook] text-[1.25rem] mb-[2rem]">
          Expertise, Innovation, Partnership, Excellence, Customer Focus, Value
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 mx-[6.25rem] my-[5rem]">
          <div className="border-b border-r h-[22.375]">
            {" "}
            <p className="py-[2.7rem] font-[CamptonSemiBold] text-[1.25rem] pl-6">
              Expertise
            </p>
            <p className="font-[CamptonBook] text-[0.875] pl-6 pr-14 py-3">
              Our team comprises industry-leading professionals with extensive
              experience across various IT disciplines, from software
              engineering to cloud computing to cybersecurity.
            </p>
          </div>
          <div className="border-b border-r h-[22.375]">
            {" "}
            <p className="py-[2.7rem] font-[CamptonSemiBold] text-[1.25rem] pl-6">
              Innovation
            </p>
            <p className="font-[CamptonBook] text-[0.875] pl-6 pr-14 py-3 pb-10">
              We're pioneers of technological innovation, constantly exploring
              new ideas and solutions to drive business growth. Dedicated to
              staying ahead of the curve, we leverage cutting-edge technologies
              and strategies to deliver optimal outcomes for our clients.
            </p>
          </div>
          <div className="border-b border-r h-[22.375] bg-[#4f45e2] text-white">
            {" "}
            <p className="py-[2.7rem] font-[CamptonSemiBold] text-[1.25rem] pl-6">
              Customer Focus
            </p>
            <p className="font-[CamptonBook] text-[0.875] pl-6 pr-14 py-3">
              At Ahyliz Technologies, customer satisfaction is our top priority.
              We provide personalized service and support, ensuring your needs
              are addressed promptly and effectively.
            </p>
          </div>
          <div className="border-b h-[22.375]">
            {" "}
            <p className="py-[2.7rem] font-[CamptonSemiBold] text-[1.25rem] pl-6">
              Value
            </p>
            <p className="font-[CamptonBook] text-[0.875] pl-6 pr-14 py-3">
              We provide competitive pricing and flexible solutions to meet your
              budget and timeline. Expect maximum value and a solid return on
              your technology investment with Ahyliz Technologies.
            </p>
          </div>
        </div>
      </div>

      <Plu />
    </>
  );
};

export default Services;
