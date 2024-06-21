import { HashLink } from "react-router-hash-link";
import Faq from "../../Home/Faq";
import Plu from "../../Home/Plu";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Ahyliz Technologies</title>
        <meta
          name="description"
          content="Learn more about Ahyliz Technologies, our mission, vision, and the expert team leading the way in Enterprise Digital Transformation and IT Services."
        />
        <meta
          name="keywords"
          content="About Ahyliz Technologies, Digital Transformation, IT Services, Cloud Consulting, Software Development"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ahyliz.ca/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "AboutPage",
            url: "https://ahyliz.ca/about",
            name: "About Us - Ahyliz Technologies",
          })}
        </script>
      </Helmet>
      {/* --- */}
      <div className="flex items-center justify-center w-full mt-[2rem] lg:mt-[5rem] ">
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
          <div className="text-center font-[LufgaMedium] text-[1.25rem]">
            <p>About us</p>
          </div>
        </div>
      </div>
      <p className="text-center font-[LufgaBold] text-[2.5rem] md:text-[4.5rem] my-4">
        Leading the Way in Tailored IT Solutions
      </p>
      <p className="text-center font-[LufgaBook] text-[1.25rem]">
        Empowering Your Digital Future
      </p>
      <div className="flex items-center mt-8 font-[LufgaBook] w-full justify-center">
        <HashLink to="/contact#cu">
          <p className="px-[2rem] py-[0.8rem] bg-[#4f45e2] rounded-lg text-white hover:opacity-40">
            Hire us
          </p>
        </HashLink>
      </div>

      <div className="flex items-center justify-center text-[#4f45e2] text-[1rem] py-6">
        <div>
          <p className="tracking-[0.3rem] font-[LufgaSemiBold]">FOLLOW US</p>
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
      <div className="bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/cc834e1a601ad1b9321eb071efba4458b0bd7bfb/Resources/Home/Images/Dots%20SVG.svg')] bg-cover w-full h-auto lg:h-[16.81rem] flex  items-center mb-4">
        <div className="flex flex-wrap justify-center gap-20 items-center my-24 w-full rounded-lg">
          <div className="text-center">
            <p className="font-[LufgaExtraBold] text-[#4f45e2] text-[2rem]">
              200+
            </p>
            <p className="font-[LufgaBook] text-[2rem]">Clients Worldwide</p>
          </div>
          <div className="text-center">
            <p className="font-[LufgaExtraBold] text-[#4f45e2] text-[2rem]">
              800+
            </p>
            <p className="font-[LufgaBook] text-[2rem]">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="font-[LufgaExtraBold] text-[#4f45e2] text-[2rem]">
              100%
            </p>
            <p className="font-[LufgaBook] text-[2rem]">
              Customer Satisfaction
            </p>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="bg-cover bg-[#f4f9ff] px-4 xl:px-[7.5rem] py-4 sm:py-20 lg:mx-[6.25rem] my-[5rem] rounded-3xl">
        <div className="flex items-center justify-center w-full ">
          <div className="flex justify-center w-full sm:w-[11rem] gap-2 px-1 py-4 bg-white rounded-[2rem]">
            <div className=" ">
              <img
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/1b251821991e6d732a7b9976d6ac2ff9841a5b28/Resources/Home/Icons/like-tag.svg"
                alt="img"
              />
            </div>
            <div className="text-center font-[LufgaMedium] text-[1.25rem]">
              <p>Our Mission</p>
            </div>
          </div>
        </div>
        <p className="text-center font-[LufgaBold] text-[2rem] my-[2rem]">
          Ahyliz Technologies: Leading the Charge in{" "}
          <br className="hidden 2xl:block" /> Customized IT Solutions
        </p>
        <p className="text-center font-[LufgaLight] 2xl:text-[1.25rem] mb-[2rem]">
          As a premier IT service provider, we specialize in Enterprise Digital
          Transformation, Cloud Consulting, Managed{" "}
          <br className="hidden 2xl:block" /> IT Services, and Software
          Development.
        </p>
        <p className="text-center font-[LufgaLight] 2xl:text-[1.25rem]">
          Our team is composed of elite professionals with extensive expertise
          in these key areas, ensuring that our{" "}
          <br className="hidden 2xl:block" /> solutions not only meet but exceed
          the specific needs and expectations of our clients. This comprehensive{" "}
          <br className="hidden 2xl:block" /> approach catalyzes significant
          business growth and enhances operational efficiency.
        </p>

        <div className="flex flex-col flex-wrap my-[2rem] lg:px-[7.5rem] ">
          <div className="flex flex-col sm:flex-row lg:gap-10 sm:items-center justify-between">
            <div className="">
              <div className="flex gap-4 font-[LufgaSemiBold] text-[1.25rem]  py-6 items-center">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/4e8b9bda46087a17218b635695c2d11df82eff3b/Resources/AboutUs/Software%20Engg.svg"
                    alt="img"
                  />
                </div>
                <div>
                  <p>Enterprise DIgital Transformation</p>
                </div>
              </div>
              <div className="flex gap-4 font-[LufgaSemiBold] text-[1.25rem]  pb-6 items-center">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/4e8b9bda46087a17218b635695c2d11df82eff3b/Resources/AboutUs/Software%20Engg-1.svg"
                    alt="img"
                  />
                </div>
                <div>
                  <p>Managed IT Services</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-4 font-[LufgaSemiBold] text-[1.25rem]  py-6  items-center">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/4e8b9bda46087a17218b635695c2d11df82eff3b/Resources/AboutUs/Software%20Engg-2.svg"
                    alt="img"
                  />
                </div>
                <div>
                  <p>Cloud Consulting</p>
                </div>
              </div>
              <div className="flex gap-4 font-[LufgaSemiBold] text-[1.25rem]  pb-6 items-center">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/4e8b9bda46087a17218b635695c2d11df82eff3b/Resources/AboutUs/Software%20Engg-3.svg"
                    alt="img"
                  />
                </div>
                <div>
                  <p>Software Development</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <HashLink to="/contact#cu">
              <p className="py-4 px-8 bg-[#4f45e2] text-white text-center  w-[11.5rem] rounded-lg font-[LufgaBook] hover:opacity-40">
                Join us now
              </p>
            </HashLink>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      {/* <div className="flex my-[6.5rem] mx-[6.25rem] gap-[2.5rem]">
        <div className="w-[29.625rem] h-[32.25rem]">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/738cb4fcab00b6efb7039bab2c429056b73e89be/Resources/AboutUs/Rectangle%2022731.svg"
            alt="img"
          />
        </div>
        <div>
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
              <p>Our Story</p>
            </div>
          </div>
          <p className="py-4 text-[2rem] font-[CamptonBold]">
            Discover Our Journey
          </p>
          <p className="font-[CamptonBook] text-[1.25rem] pb-[0.8rem] tracking-[0.1rem]">
            Founded in 2021, Ahyliz Technologies is driven by a passion for
            innovation <br /> and empowering businesses with transformative
            technology solutions.
          </p>
          <p className="font-[CamptonBook] text-[1.25rem] py-[0.8rem] tracking-[0.1rem]">
            Our journey is defined by relentless determination and unwavering{" "}
            <br />
            commitment.
          </p>
          <p className="font-[CamptonBook] text-[1.25rem] py-[0.8rem] tracking-[0.1rem]">
            Our dedicated team embodies our core values of collaboration,
            creativity, <br /> and excellence, working together to inspire and
            empower businesses to <br /> thrive in the digital age.
          </p>
          <p className="font-[CamptonBook] text-[1.25rem] py-[0.8rem] tracking-[0.1rem]">
            As we look ahead, our commitment to innovation, client success, and{" "}
            <br />
            positive impact remains unwavering.
          </p>
        </div>
      </div> */}
      {/* section 4 */}
      <div className="bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/cc834e1a601ad1b9321eb071efba4458b0bd7bfb/Resources/Home/Images/Dots%20SVG.svg')] bg-cover w-auto h-[16.81rem] flex justify-center sm:justify-between items-center">
        <div className="flex flex-wrap justify-center sm:justify-between items-center lg:mx-[7.5rem] sm:my-24 bg-[#f7f7f7] w-full rounded-lg">
          <div className="px-2 lg:px-8 py-4 font-[LufgaMedium] sm:font-[LufgaBold] text-[0.8rem] sm:text-[1.5rem]">
            Learn more about Ahyliz Technologies
          </div>
          <Link to="/services">
            <div className="px-2 mx-1 sm:px-4 py-4 sm:mx-8 my-2 sm:my-4 bg-[#4f45e2] rounded-3xl text-white text-[0.7rem] sm:text-[0.875rem] font-[LufgaMedium] sm:font-[LufgaBold] hover:opacity-40">
              {" "}
              See How It Works?
            </div>
          </Link>
        </div>
      </div>

      {/* section 5 */}
      {/* <div className="bg-cover bg-[#f4f9ff] py-4 sm:py-20 px-[6.25rem] mt-[5rem] rounded-3xl">
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

        <div className="grid grid-cols-2 sm:grid-cols-4 mx-[6.25rem] my-[5rem] gap-[1.875rem]">
          <div>
            {" "}
            <img
              className="w-[16.875rem] h-[20.625rem] "
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/2dd276b069ec31c66a61541d02d48d501de8de3e/Resources/AboutUs/Group%201160444282.svg"
              alt="img"
            />
          </div>
          <div>
            {" "}
            <img
              className="w-[16.875rem] h-[20.625rem] "
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/AboutUs/Single%20Team%202.png"
              alt="img"
            />
          </div>
          <div>
            {" "}
            <img
              className="w-[16.875rem] h-[20.625rem] "
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/AboutUs/Group%201160444286.png"
              alt="img"
            />
          </div>
          <div>
            {" "}
            <img
              className="w-[16.875rem] h-[20.625rem] "
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/2dd276b069ec31c66a61541d02d48d501de8de3e/Resources/AboutUs/Single%20Team.svg"
              alt="img"
            />
          </div>
        </div>
      </div> */}

      {/* section 6 */}
      <div className=" py-4 sm:py-10 xl:px-[6.25rem] rounded-3xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:mx-[6.25rem] my-[5rem]">
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
      {/* section 7 */}
      <div id="ot" className="text-white">
        .
      </div>
      <div className="bg-cover bg-[#f4f9ff] py-4 sm:py-20 px-4 xl:px-[10rem] rounded-3xl">
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
            <div className="text-center font-[LufgaMedium] text-[1.25rem]">
              <p>Our Achievements & Work </p>
            </div>
          </div>
        </div>
        <p className="text-center font-[LufgaBold] text-[2rem] my-[1rem]">
          Leading the Way in Tailored IT Solutions
        </p>
        <p className="text-center font-[LufgaLight] sm:text-[1.25rem] mb-[2rem]">
          At Ahyliz Technologies, our commitment to excellence and innovation is
          reflected in the success stories and{" "}
          <br className="hidden xl:block" /> achievements we have amassed over
          the years. We pride ourselves on our ability to deliver transformative
          IT <br className="hidden xl:block" /> solutions across various
          sectors. Here are some highlights of our work and the milestones we
          have achieved:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center xl:gap-[4rem] xl:mx-[4.25rem]">
          <div className="flex flex-col  items-center">
            <img
              className="w-[10rem] h-[7.5rem] my-6"
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/2dd276b069ec31c66a61541d02d48d501de8de3e/Resources/AboutUs/Layer.svg"
              alt="Industry Recognition"
            />
            <p className="text-[1.5rem] font-[LufgaBold] mb-6">
              Industry Recognition
            </p>
            <p className="text-center font-[LufgaLight]">
              Ahyliz Technologies has been recognized by industry leaders and{" "}
              <br className="hidden 2xl:block" />
              publications for our pioneering work in digital transformation and{" "}
              <br className="hidden 2xl:block" />
              IT services. Our accolades include awards for 'Best IT Services{" "}
              <br className="hidden 2xl:block" />
              Provider' and 'Innovator in Cloud Solutions.'
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-[10rem] h-[7.5rem] my-6"
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/2dd276b069ec31c66a61541d02d48d501de8de3e/Resources/AboutUs/Layer-1.svg"
              alt="Global Clientele"
            />
            <p className="text-[1.5rem] font-[LufgaBold] mb-6">
              Global Clientele
            </p>
            <p className="text-center font-[LufgaLight] ">
              We have successfully partnered with over 500 companies{" "}
              <br className="hidden 2xl:block" /> worldwide, including Fortune
              500 firms, providing them with <br className="hidden xl:block" />{" "}
              tailored IT solutions that have revolutionized their operations
              and <br className="hidden 2xl:block" /> enhanced their
              competitiveness in the market.
            </p>
          </div>
        </div>
      </div>

      {/* section 8 */}
      <div className=" py-4 sm:py-10 lg:px-[10rem] rounded-3xl">
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
            <div className="text-center font-[LufgaMedium] text-[1.25rem]">
              <p>Significant Projects </p>
            </div>
          </div>
        </div>
        <p className="text-center font-[LufgaBold] text-[2rem] my-[1rem]">
          Innovating Every Field of Work
        </p>
        <p className=" font-[LufgaLight] sm:text-[1.25rem] text-center mb-[2rem]">
          Through our relentless pursuit of excellence and a client-centric
          approach, Ahyliz Technologies continues to set{" "}
          <br className="hidden xl:block" /> new standards in the IT industry,
          ensuring our clients are well-equipped to meet the challenges of{" "}
          <br className="hidden xl:block" /> the digital age.
        </p>
      </div>
      <div className="flex justify-center xl:mx-[6.25rem] lg:gap-[2.5rem]">
        <div className="lg:w-[29.625rem] h-[32.25rem]">
          <img
            className="hidden lg:block"
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/2dd276b069ec31c66a61541d02d48d501de8de3e/Resources/AboutUs/Illustration.svg"
            alt="Digital Transformation"
          />
        </div>
        <div>
          <p className="py-4 text-[2rem] font-[LufgaBold]">
            Digital Transformation for a Major Retailer
          </p>
          <p className="font-[LufgaLight] sm:text-[1.25rem] pb-[0.8rem] ">
            Led a complete digital overhaul for a leading retail chain,
            integrating <br className="hidden md:block" /> advanced AI and IoT
            technologies that resulted in a 40% increase in{" "}
            <br className="hidden md:block" /> operational efficiency and
            significantly improved customer experiences.
          </p>
          <p className="font-[LufgaLight] sm:text-[1.25rem] py-[0.8rem] ">
            Cloud Migration for a Financial Institution: Executed a seamless{" "}
            <br className="hidden md:block" />
            transition of critical data and operations to a secure cloud
            environment <br className="hidden md:block" /> for a multinational
            bank, enhancing their data security and operational{" "}
            <br className="hidden md:block" /> scalability.
          </p>
          <p className="font-[LufgaLight] sm:text-[1.25rem] py-[0.8rem] ">
            Innovative Software Solutions: Developed a suite of proprietary
            software <br className="hidden md:block" /> tools that have become
            benchmarks in the industry.
          </p>
        </div>
      </div>
      <div className="flex justify-center xl:mx-[6.25rem] lg:gap-[2.5rem]">
        <div className="lg:w-[30rem] h-[20em]">
          <img
            className="hidden lg:block"
            src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/2dd276b069ec31c66a61541d02d48d501de8de3e/Resources/AboutUs/Frame.svg"
            alt="Community Engagement"
          />
        </div>
        <div>
          <p className="py-4 text-[2rem] font-[LufgaBold]">
            Community Engagement and CSR
          </p>
          <p className="font-[LufgaLight] sm:text-[1.25rem] pb-[0.8rem] ">
            Ahyliz Technologies' commitment to giving back to the community{" "}
            <br className="hidden md:block" />
            extends beyond mere words, as evidenced by its proactive engagement
            in <br className="hidden md:block" />
            various Corporate Social Responsibility (CSR) projects.
          </p>
          <p className="font-[LufgaLight] sm:text-[1.25rem] py-[0.8rem] ">
            These initiatives are carefully designed to make a tangible impact,{" "}
            <br className="hidden md:block" />
            particularly in underprivileged areas where access to education and{" "}
            <br className="hidden md:block" />
            technology is limited.
          </p>
        </div>
      </div>

      {/* section 9 */}
      <div className="flex flex-col  justify-between items-center lg:px-[10rem] bg-cover bg-[#f4f9ff] py-4 sm:py-20 rounded-3xl">
        <div className="flex flex-wrap items-center justify-center w-full pb-4 lg:pb-10 ">
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
            <div className="text-center font-[LufgaMedium] text-[1.25rem]">
              <p>Sustained Growth </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-center xl:mx-[1.5rem] lg:gap-[0.5rem] text-center items-center justify-items-center">
          <div className="w-auto">
            <img
              className="hidden lg:block"
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/5fc43d2442267cee4b774f57fa073cca3fa85351/Resources/AboutUs/Frame-1.svg"
              alt="Sustained Growth"
            />
          </div>
          <div>
            <p className="font-[LufgaLight] sm:text-[1.25rem] pb-[0.8rem] ">
              Over the past decade, we have maintained a double-digit growth
              rate, expanding our services, customer base, and global reach.
              This growth is a testament to our robust business model and our
              team’s dedication to pushing the boundaries of what is possible in
              IT services.
            </p>
            <p className="font-[LufgaLight] sm:text-[1.25rem] py-[0.8rem] ">
              Through our relentless pursuit of excellence and a client-centric{" "}
              approach, Ahyliz Technologies continues to set new standards in{" "}
              the IT industry, ensuring our clients are well-equipped to meet{" "}
              the challenges of the digital age.
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
