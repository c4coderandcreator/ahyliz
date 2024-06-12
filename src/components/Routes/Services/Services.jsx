import React from "react";
import Plu from "../../Home/Plu";
import { Link } from "react-router-dom";
import HomeSecBg from "../../HomeSecBg/HomeSecBg";

const Services = () => {
  return (
    <>
      {/* section 1 */}
      <div className="flex p-6 lg:p-20 lg:mx-10 justify-between">
        <div className="sm:text-[1.25rem] lg:mr-20 ">
          <div className="flex">
            <div>
              <img
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/4e8b9bda46087a17218b635695c2d11df82eff3b/Resources/Services/call-calling.svg"
                alt="img"
              />
            </div>
            <div className="sm:mx-2 font-[LufgaMedium] pb-4">
              <p>Comprehensive IT Solutions</p>
            </div>
          </div>
          <p className="text-[2.5rem] sm:text-[4.5rem] font-[LufgaBold] leading-[3.875rem] lg:leading-[4.875rem]">
            Explore Range of <br /> Tailored <br /> Solutions
          </p>
          <p className="py-2 font-[LufgaBook]">
            Empowering Your Business with Advanced Technology{" "}
            <br className="hidden lg:block" /> Services
          </p>
          <div className="flex items-center mt-8 font-[LufgaBook]">
            <Link to="/contact">
              <p className="px-7 py-3 bg-[#4f45e2] rounded-lg text-white hover:opacity-40">
                Get Started
              </p>
            </Link>
          </div>

          <div className="flex text-[#4f45e2] text-[1rem] py-6">
            <div>
              <p className="tracking-[0.3rem] font-[LufgaSemiBold]">
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
            className=" h-auto lg:h-[29.375rem] w-[38.187rem] ml-20 hidden sm:block"
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/2d20f17dc2478772f51aebff3c065fc1109b5fab/Resources/Services/Illustration%202.svg"
            alt="img"
          />
        </div>
      </div>
      {/* section 2 */}
      <div className="bg-cover bg-[#f4f9ff] px-4 lg:px-[7.5rem] py-4 sm:py-10">
        <div className="flex items-center justify-center w-full ">
          <div className="flex justify-center w-full sm:w-[18rem] gap-2 px-1 py-4 bg-white rounded-[2rem]">
            <div className=" ">
              <img
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Services/star.png"
                alt="img"
              />
            </div>
            <div className="text-center font-[LufgaBold] text-[2rem]">
              <p>Our Services</p>
            </div>
          </div>
        </div>
        <p className="text-center font-[LufgaBold] text-[2rem] my-4">
          Enterprise Digital Transformation
        </p>
        <p className="text-center font-[LufgaBook] text-[1.25rem]">
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

          <div className="w-[44.56rem] h-auto lg:h-[25.5rem]">
            <p className="font-[LufgaBold] text-[1.5rem] leading-8">
              Empower Your Business with a Strategic Overhaul
            </p>
            <p className="font-[LufgaLight] text-[1rem] py-4">
              At Ahyliz Technologies, Enterprise Digital Transformation is about
              thoroughly redefining your business to thrive in the digital era.
              We harness a variety of enterprise architecture platforms, such as
              TOGAF, Zachman, and FEAF, to ensure that our solutions are built
              on proven methodologies and frameworks.
              <br /> <br />
              Our comprehensive services are designed to drive operational
              excellence and spark innovation across your business.
            </p>
            <div className="flex gap-4 font-[LufgaSemiBold] text-[1.25rem]  py-6 items-center">
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
            <div className="flex gap-4 font-[LufgaSemiBold] text-[1.25rem]  pb-6 items-center">
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
            <div className="flex gap-4 font-[LufgaSemiBold] text-[1.25rem] items-center">
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
      <p className="text-center font-[LufgaBold] text-[2rem] mt-14 my-4">
        Managed IT Services
      </p>
      <p className="text-center font-[LufgaBook] text-[1.25rem]">
        Proactive IT Management for Uninterrupted Business Operations
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3.25rem] lg:mx-[7.5rem] my-[5rem]">
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame.svg"
            alt="img"
          />
          <p className="text-center font-[LufgaSemiBold] text-[1.25rem] py-8">
            Continuous Monitoring
          </p>
          <p className="text-left font-[LufgaLight]">
            We operate 24/7 system monitoring to swiftly identify and resolve
            potential issues before they disrupt your business operations.{" "}
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame-1.svg"
            alt="img"
          />
          <p className="text-center font-[LufgaSemiBold] text-[1.25rem] py-8">
            IT Support & Maintenance
          </p>
          <p className="text-left font-[LufgaLight]">
            Our dedicated team provides round-the-clock support and performs
            regular maintenance to ensure that your IT systems function
            smoothly.
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame-2.svg"
            alt="img"
          />
          <p className="text-center font-[LufgaSemiBold] text-[1.25rem] py-8">
            Security Management
          </p>
          <p className="text-left font-[LufgaLight]">
            We implement stringent security protocols to safeguard your data and
            IT infrastructure from emerging cyber threats.
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame-3.svg"
            alt="img"
          />
          <p className="text-center font-[LufgaSemiBold] text-[1.25rem] py-8">
            Backup and Disaster Recovery
          </p>
          <p className="text-left font-[LufgaLight]">
            We establish reliable backup solutions and disaster recovery plans
            to protect your critical data and ensure business continuity in any
            scenario.
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame-4.svg"
            alt="img"
          />
          <p className="text-center font-[LufgaSemiBold] text-[1.25rem] py-8">
            Cloud Services Management
          </p>
          <p className="text-left font-[LufgaLight]">
            Whether you're using public, private, or hybrid cloud environments,
            our team manages and optimizes your cloud resources.
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame-5.svg"
            alt="img"
          />
          <p className="text-center font-[LufgaSemiBold] text-[1.25rem] py-8">
            Vendor and Asset Management
          </p>
          <p className="text-left font-[LufgaLight]">
            We oversee all your IT vendor relationships and manage your IT asset
            lifecycle to ensure you get the best service and value from your
            investments.
          </p>
        </div>
      </div>

      {/* section 3.5 */}
      <p className="font-[LufgaMedium] text-[1.25rem] pb-[5rem] text-center">
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
      <div className=" lg:px-[7.5rem] py-6 sm:py-20">
        <p className="text-center font-[LufgaBold] text-[2rem] my-4">
          Cloud Consulting
        </p>
        <p className="text-center font-[LufgaBook] text-[1.25rem]">
          Expert Guidance Through Your Cloud Journey
        </p>
        <div className="flex flex-wrap justify-between lg:justify-center pt-[5rem] gap-4 sm:gap-2 w-full font-[LufgaBook]">
          <div className="text-left lg:text-right w-auto lg:w-[23.5rem]">
            <p className="font-[LufgaSemiBold] text-[1.25rem]">
              Cloud Architecture Design
            </p>
            <p className="pb-4 lg:pb-[7rem] font-[LufgaLight]">
              Our experts design robust, scalable, and{" "}
              <br className="hidden lg:block" /> secure cloud solutions that are
              cost-effective <br /> and tailored to meet the unique demands of{" "}
              <br v />
              your business
            </p>
            <p className="font-[LufgaSemiBold] text-[1.25rem]">
              Vendor Selection & Management
            </p>
            <p className="font-[LufgaLight]">
              Choosing the right cloud provider is crucial for{" "}
              <br className="hidden lg:block" /> your cloud journey. We assist
              in selecting the <br className="hidden lg:block" /> most suitable
              cloud vendors that align with <br className="hidden lg:block" />{" "}
              your business objective
            </p>
          </div>
          <div className="w-auto lg:w-[31rem] hidden sm:block">
            <img
              className="hidden lg:block"
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Services/Group%201000004731.png"
              alt="img"
            />
          </div>
          <div className="w-auto lg:w-[23.5rem]">
            <p className="font-[LufgaSemiBold] text-[1.25rem]">
              Expert Guidance
            </p>
            <p className="pb-4 lg:pb-[7rem] font-[LufgaLight]">
              Our Cloud Consulting services at Ahyliz{" "}
              <br className="hidden lg:block" /> Technologies are meticulously
              crafted to guide <br className="hidden lg:block" /> you through
              the complexities of cloud <br className="hidden lg:block" />{" "}
              environments.
            </p>
            <p className="font-[LufgaSemiBold] text-[1.25rem]">
              Cloud Readiness Assessment
            </p>
            <p className="font-[LufgaLight]">
              We evaluate your existing infrastructure and{" "}
              <br className="hidden lg:block" /> applications to determine your
              readiness for <br className="hidden lg:block" /> cloud migration.
            </p>
          </div>
        </div>
      </div>
      {/* section 5 */}
      <p className="text-center font-[LufgaBold] text-[2rem] mt-14 my-4">
        Software Development
      </p>
      <p className="text-center font-[LufgaBook] text-[1.25rem]">
        Tailored Software Solutions to Drive Business Innovation
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3.25rem] lg:mx-[7.5rem] my-[5rem]">
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame-6.svg"
            alt="img"
          />
          <p className="text-center font-[LufgaSemiBold] text-[1.25rem] py-8">
            Custom Application Development
          </p>
          <p className="text-left font-[LufgaLight]">
            Our team excels in designing and developing bespoke applications
            across a variety of platforms.
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame-7.svg"
            alt="img"
          />
          <p className="text-center font-[LufgaSemiBold] text-[1.25rem] py-8">
            System Integration
          </p>
          <p className="text-left font-[LufgaLight]">
            We specialize in seamlessly integrating new software with your
            existing IT <br /> infrastructure.
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame-8.svg"
            alt="img"
          />
          <p className="text-center font-[LufgaSemiBold] text-[1.25rem] py-8">
            Software Modernization
          </p>
          <p className="text-left font-[LufgaLight]">
            We modernize outdated systems by migrating them to advanced
            platforms that significantly improve performance and reduce
            maintenance costs.
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame-9.svg"
            alt="img"
          />
          <p className="text-center font-[LufgaSemiBold] text-[1.25rem] py-8">
            Agile Development Practices
          </p>
          <p className="text-left font-[LufgaLight]">
            By adopting agile methodologies, we guarantee flexibility, rapid
            delivery, and continuous enhancement throughout the software
            development lifecycle.
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame-10.svg"
            alt="img"
          />
          <p className="text-center font-[LufgaSemiBold] text-[1.25rem] py-8">
            User Experience & Interface Design
          </p>
          <p className="text-left font-[LufgaLight]">
            We prioritize user experience (UX) and user interface (UI) design in
            all our software projects to ensure intuitive and engaging
            applications design.
          </p>
        </div>
        <div
          className="flex flex-col items-center p-[2rem] rounded-xl"
          style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b863f58e1651b307e5f2590de8701c6ce55dcf4d/Resources/Services/Frame-11.svg"
            alt="img"
          />
          <p className="text-center font-[LufgaSemiBold] text-[1.25rem] py-8">
            API Development & Management
          </p>
          <p className="text-left font-[LufgaLight]">
            Our developers create powerful, secure, and well-documented APIs
            that allow your applications to interact seamlessly with other
            systems.
          </p>
        </div>
      </div>
      {/* section 6 */}
      <p className="font-[LufgaMedium] text-[1.25rem] pb-[5rem] text-center">
        Comprehensive IT and Software Solutions
      </p>

      <div className="flex flex-col sm:flex-row justify-center lg:mx-[6.25rem] gap-[2.5rem]">
        <div className="lg:w-[30rem] h-[20em]">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/b1cc41092a4932cac5572c7eed938cb75f1b3374/Resources/Services/Frame-12.svg"
            alt="img"
          />
        </div>
        <div>
          <p className="font-[LufgaLight] lg:text-[1.25rem] pb-[0.8rem] ">
            Together with Enterprise Digital Transformation, Cloud Consulting,
            and Managed IT Services,
            <br /> our Software Development capabilities form a complete suite
            of solutions that support every <br /> aspect of your digital and IT
            strategy.
          </p>
          <p className="font-[LufgaLight] lg:text-[1.25rem] py-[0.8rem] ">
            This holistic approach ensures that cutting-edge technology not only
            propels your business <br /> forward but also integrates smoothly to
            create a cohesive and efficient IT ecosystem. <br /> Through our
            comprehensive services, Ahyliz Technologies empowers your business
            to <br /> navigate the complexities of the digital world with
            confidence and strategic advantage.
          </p>
        </div>
      </div>
      {/* section 7 */}
      <div className="bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/cc834e1a601ad1b9321eb071efba4458b0bd7bfb/Resources/Home/Images/Dots%20SVG.svg')] bg-cover w-full h-[16.81rem] flex  items-center">
        <div className="flex flex-wrap justify-between items-center sm:mx-[6.25rem] sm:my-24 bg-[#f7f7f7] w-full rounded-lg">
          <div className="px-2 sm:px-8 py-3 font-[LufgaMedium] sm:font-[LufgaBold] text-[0.8rem] sm:text-[1.5rem]">
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
      <div className=" py-4 sm:py-10 lg:px-[6.25rem] rounded-3xl">
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
            <div className="text-center font-[LufgaMedium] text-[1.25rem]">
              <p>Why Choose us</p>
            </div>
          </div>
        </div>
        <p className="text-center font-[LufgaBold] text-[2rem] my-[1rem]">
          Why Ahyliz Technologies?
        </p>
        <p className="text-center font-[LufgaBook] text-[1.25rem] mb-[2rem]">
          Expertise, Innovation, Partnership, Excellence, Customer Focus, Value
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:mx-[6.25rem] my-[5rem]">
          <div className="border-b border-r h-[22.375] hover:bg-[#4f45e2] hover:text-white">
            {" "}
            <p className="py-[2.7rem] font-[LufgaSemiBold] text-[1.25rem] pl-6">
              Expertise
            </p>
            <p className="font-[LufgaLight] text-[0.875] pl-6 pr-14 py-3">
              Our team comprises industry-leading professionals with extensive
              experience across various IT disciplines, from software
              engineering to cloud computing to cybersecurity.
            </p>
          </div>
          <div className="border-b border-r h-[22.375] hover:bg-[#4f45e2] hover:text-white">
            {" "}
            <p className="py-[2.7rem] font-[LufgaSemiBold] text-[1.25rem] pl-6">
              Innovation
            </p>
            <p className="font-[LufgaLight] text-[0.875] pl-6 pr-14 py-3 pb-10">
              We're pioneers of technological innovation, constantly exploring
              new ideas and solutions to drive business growth. Dedicated to
              staying ahead of the curve, we leverage cutting-edge technologies
              and strategies to deliver optimal outcomes for our clients.
            </p>
          </div>
          <div className="border-b border-r h-[22.375] hover:bg-[#4f45e2] hover:text-white">
            {" "}
            <p className="py-[2.7rem] font-[LufgaSemiBold] text-[1.25rem] pl-6">
              Customer Focus
            </p>
            <p className="font-[LufgaLight] text-[0.875] pl-6 pr-14 py-3">
              At Ahyliz Technologies, customer satisfaction is our top priority.
              We provide personalized service and support, ensuring your needs
              are addressed promptly and effectively.
            </p>
          </div>
          <div className="border-b h-[22.375] hover:bg-[#4f45e2] hover:text-white">
            {" "}
            <p className="py-[2.7rem] font-[LufgaSemiBold] text-[1.25rem] pl-6">
              Value
            </p>
            <p className="font-[LufgaLight] text-[0.875] pl-6 pr-14 py-3">
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
