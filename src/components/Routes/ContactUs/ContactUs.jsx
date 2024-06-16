import React from "react";
import Faq from "../../Home/Faq";
import Contact from "../../Home/Contact";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Ahyliz Technologies</title>
        <meta
          name="description"
          content="Get in touch with Ahyliz Technologies for expert solutions in Digital Transformation, Cloud Consulting, Managed IT Services, and Software Development."
        />
        <meta
          name="keywords"
          content="Contact Ahyliz Technologies, IT Solutions Contact, Digital Transformation Contact, Cloud Consulting Contact"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ahyliz.ca/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "ContactPage",
            url: "https://ahyliz.ca/contact",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-844-709-7333",
              contactType: "Customer Service",
            },
          })}
        </script>
      </Helmet>

      {/* section 1 */}
      <div className="flex p-6 sm:p-20 lg:mx-10 justify-between">
        <div className="sm:text-[1.25rem] lg:mr-20 ">
          <div className="flex">
            <div>
              <img
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/42a9b7f29a07ac9f0abf60584a89e918ec8aa762/Resources/Home/Icons/like.svg"
                alt="img"
              />
            </div>
            <div className="sm:mx-2 font-[LufgaMedium] pb-4">
              <p>Let’s Start a Conversation</p>
            </div>
          </div>
          <p className="text-[3.5rem] sm:text-[4.5rem] font-[LufgaBold] leading-[4.875rem]">
            Reach Out to Us <br /> Today
          </p>
          <p className="py-2 font-[LufgaBook]">
            Our experts are available to answer any questions you{" "}
            <br className="hidden lg:block" /> might have. We’ve got the
            answers.
          </p>
          <div className="flex items-center mt-8 font-[LufgaBook]">
            <HashLink to="/contact#cu">
              <p className="px-7 py-3 bg-[#4f45e2] rounded-lg text-white hover:opacity-40">
                Get Started
              </p>
            </HashLink>
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
                  id="acc"
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
            alt="Contact Us - Ahyliz Technologies"
          />
        </div>
      </div>

      {/* next section */}
      <div
        id="cu"
        className="bg-[#f4f9ff] mb-[5rem] lg:mx-[7.5rem] py-[3.75rem] lg:px-[5rem] rounded-2xl"
      >
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
              <p>Contact us</p>
            </div>
          </div>
        </div>
        <p className="text-center font-[LufgaBold] text-[2rem] my-[1rem]">
          Get in Touch With Us Now
        </p>
        <p className="text-center font-[LufgaBook] text-[1.25rem] mb-[2rem]">
          Contact us without any hesitation
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 my-[5rem]">
          {/* 1st */}
          <div
            className="p-[2rem] font-[LufgaBook] rounded-xl w-[21rem]"
            style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
          >
            <div className="flex flex-col justify-between ">
              <div className="flex justify-between ">
                <div>
                  <p className="font-[LufgaSemiBold] text-[1rem] ">Call Us</p>
                </div>
                <div>
                  <img
                    src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Careers/Icon.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="py-[0.5rem]">
                <div className="flex">
                  <p className="text-[0.75rem]">
                    Keen to chat with one of our Expert? Go <br /> on, we don’t
                    bite. Give us a call on the number below.
                  </p>
                </div>
              </div>
              <div className="flex justify-start">
                <div>
                  <Link to="tel:+1(844)4007222">
                    <p className="py-3 px-5 my-2 border-2 text-[#4f45e2] rounded-3xl border-[#4f45e2] text-[0.75rem] hover:opacity-40">
                      +1(844)400 7222
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div
            className="p-[2rem] font-[LufgaBook] rounded-xl bg-[#4f45e2] w-[21rem]"
            style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
          >
            <div className="flex flex-col justify-between">
              <div className="flex justify-between ">
                <div>
                  <p className="font-[LufgaSemiBold] text-[1rem] text-white ">
                    Email Us
                  </p>
                </div>
                <div>
                  <img
                    src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Careers/Icon-1.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="py-[0.5rem]">
                <div className="flex text-white">
                  <p className="text-[0.75rem]">
                    Email us now about any problem you face <br /> with your
                    business. Do share your concern with us
                  </p>
                </div>
              </div>
              <div className="flex justify-start">
                <div>
                  <Link to="mailto:info@ahyliz.ca">
                    <p className="py-3 px-5 my-2 border-2 text-[#4f45e2] rounded-3xl bg-white border-[#4f45e2] text-[0.75rem] hover:opacity-40">
                      @ Email us Now
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div
            className="p-[2rem] font-[LufgaBook] rounded-xl w-[21rem]"
            style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
          >
            <div className="flex flex-col justify-between ">
              <div className="flex justify-between ">
                <div>
                  <p className="font-[LufgaSemiBold] text-[1rem]">Support</p>
                </div>
                <div>
                  <img
                    src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Careers/Icon-2.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="py-[0.5rem]">
                <div className="flex">
                  <p className="text-[0.75rem]">
                    If you are an existing Ahyliz Technologies <br /> customer
                    looking for any support please <br /> open chat bot
                  </p>
                </div>
              </div>
              <div className="flex justify-start">
                <div>
                  <p className="py-3 px-5 my-2 border-2 text-[#4f45e2] rounded-3xl border-[#4f45e2] text-[0.75rem]">
                    Open Chat Bot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/cc834e1a601ad1b9321eb071efba4458b0bd7bfb/Resources/Home/Images/Dots%20SVG.svg')] bg-cover w-full h-[16.81rem] flex  items-center">
        <div className="flex flex-wrap justify-between items-center sm:mx-[7.5rem] sm:my-24 bg-[#f7f7f7] w-full rounded-lg">
          <div className="px-2 sm:px-8 py-3 font-[LufgaMedium] sm:font-[LufgaBold] text-[0.8rem] sm:text-[1.5rem]">
            Learn more about Ahyliz Technologies
          </div>
          <Link to="/services">
            <div className="px-2 mx-1 sm:px-4 py-3 sm:mx-8 my-2 sm:my-4 bg-[#4f45e2] rounded-3xl text-white text-[0.7rem] sm:text-[0.875rem] font-[LufgaMedium] sm:font-[LufgaBold] hover:opacity-40">
              {" "}
              See How It Works?
            </div>
          </Link>
        </div>
      </div>
      <div id="faq">
        <Faq />
      </div>

      <Contact />
    </>
  );
};

export default ContactUs;
