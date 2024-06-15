import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <div className="relative bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Images/bgContact%20us.png')] bg-cover h-[55rem] sm:h-auto py-6 lg:h-[48rem] pb-[10rem]">
        <div className="flex flex-wrap md:flex-nowrap  justify-between gap-6 lg:gap-40 relative z-10 lg:ml-[10rem] lg:my-[5rem] sm:my-0 sm:mt-[3rem]">
          <div>
            <div
              className="flex justify-center w-auto sm:w-[14rem] gap-2 px-1 py-4 bg-white rounded-[2rem] mb-4 sm:mb-8"
              style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
            >
              <div className=" ">
                <img
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/e9e8d354842ffc4a2777223061de82f54f46bacc/Resources/Home/Icons/call.svg"
                  alt="img"
                />
              </div>
              <div className="text-center font-[LufgaMedium] text-[1.25rem]  ">
                <p>Contact us</p>
              </div>
            </div>
            <p className="font-[LufgaBold] leading-8 sm:leading-10 text-[2rem] text-[#4f45e2] my-10 sm:my-0 sm:mb-0">
              Let’s talk! <br /> Love to hear from you.
            </p>
            <div className="flex flex-wrap sm:flex-nowrap lg:gap-[5rem] sm:mt-[3rem]">
              <div className="flex gap-2 sm:gap-[2rem]">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/e9e8d354842ffc4a2777223061de82f54f46bacc/Resources/Home/Icons/location.svg"
                    alt="img"
                  />
                </div>
                <div>
                  <Link
                    to="https://maps.app.goo.gl/MaYpmND9nCKTXZVA9"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <p className="text-[1.125rem] font-[LufgaSemiBold] mb-4 hover:opacity-40">
                      Our Location
                    </p>
                    <p className="text-[#888888] font-[LufgaBook] hover:opacity-40">
                      34 Minowan Miikan Ln,
                      <br /> Toronto, ON <br /> Canada <br /> M6J 0G3
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex">
                <div className="flex gap-2 sm:gap-[2rem]">
                  <div>
                    <img
                      className="mt-4 sm:mt-0"
                      src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/e9e8d354842ffc4a2777223061de82f54f46bacc/Resources/Home/Icons/sms.svg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <Link to="mailto:info@ahyliz.ca">
                      <p className="text-[1.125rem] font-[LufgaSemiBold] mb-4 mt-4 sm:mt-0 hover:opacity-40">
                        How Can We Help?
                      </p>
                      <p className="text-[#888888] font-[LufgaBook] hover:opacity-40">
                        Email: info@ahyliz.ca
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="my-8 sm:my-0 rounded-2xl mx-auto sm:mr-[10rem] w-auto sm:w-[32rem] h-auto sm:h-[42rem] p-8 sm:p-[5rem] bg-white relative z-20"
            style={{ boxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.10)" }}
          >
            <p className="font-[LufgaSemiBold] text-[1.75rem] pb-8">
              Send us a Message{" "}
            </p>
            <form
              className="flex flex-col font-[LufgaBook] text-[13px]"
              action=""
            >
              <label className="py-2 text-[15px]" htmlFor="">
                Full Name*
              </label>
              <input
                className="border-b py-2 leading-6"
                type="text"
                placeholder="Isaiah Owolabi"
              />
              <label className="py-2 text-[15px] leading-6" htmlFor="">
                Email*
              </label>
              <input
                className="border-b py-2 leading-6"
                type="text"
                placeholder="example@yourmail.com"
              />
              <label className="py-2 text-[15px] leading-6" htmlFor="">
                Phone*
              </label>
              <input
                className="border-b py-2 leading-6"
                type="text"
                placeholder="+1 215 452 1155"
              />
              <label className="py-2 text-[15px] leading-6" htmlFor="">
                Message*
              </label>
              <input
                className="border-b py-2 leading-6"
                type="text"
                placeholder="type your message here"
              />
              <input
                className="bg-[#4f45e2] text-white font-[LufgaBook] font-medium text-xs md:text-base border-2 border-webbut-400 bg-webbut-400 hover:opacity-40 cursor-pointer w-[8rem] items-center py-4 sm:py-2 md:py-3 my-4 rounded-lg mt-6"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
