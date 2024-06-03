import React from "react";

const Contact = () => {
  return (
    <>
      <div className="relative bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Images/bgContact%20us.png')] bg-cover h-[48rem]">
        <div className="flex justify-between gap-40 relative z-10 ml-[10rem] mt-[3rem]">
          <div>
            <div
              className="flex justify-center w-[14rem] gap-2 px-1 py-4 bg-white rounded-[2rem] mb-8"
              style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
            >
              <div className=" ">
                <img
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/e9e8d354842ffc4a2777223061de82f54f46bacc/Resources/Home/Icons/call.svg"
                  alt="img"
                />
              </div>
              <div className="text-center font-[CamptonMedium] text-[1.25rem]  ">
                <p>Contact us</p>
              </div>
            </div>
            <p className="font-[CamptonBold] text-[2rem] text-[#4f45e2]">
              Let’s talk! <br /> Love to hear from you.
            </p>
            <div className="flex gap-[5rem] mt-[3rem]">
              <div className="flex gap-[2rem]">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/e9e8d354842ffc4a2777223061de82f54f46bacc/Resources/Home/Icons/location.svg"
                    alt="img"
                  />
                </div>
                <div>
                  <p className="text-[1.125rem] font-[CamptonSemiBold] mb-4">
                    Our Location
                  </p>
                  <p className="text-[#888888] font-[CamptonBook]">
                    34 Minowan Miikan Lane,
                    <br /> Toronto, ON M6J 0G3
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex gap-[2rem]">
                  <div>
                    <img
                      src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/e9e8d354842ffc4a2777223061de82f54f46bacc/Resources/Home/Icons/sms.svg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <p className="text-[1.125rem] font-[CamptonSemiBold] mb-4">
                      How Can We Help?
                    </p>
                    <p className="text-[#888888] font-[CamptonBook]">
                      info@ahyliz.ca,
                      <br /> contact@ahyliz.ca
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rounded-2xl mr-[10rem] w-[32rem] h-[42rem] p-[5rem] bg-white relative z-20"
            style={{ boxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.10)" }}
          >
            <p className="font-[CamptonSemiBold] text-[1.75rem] pb-8">
              Send us a Message{" "}
            </p>
            <form
              className="flex flex-col font-[CamptonBook] text-[13px]"
              action=""
            >
              <label className="py-2 text-[15px]" htmlFor="">
                Full Name*
              </label>
              <input
                className="border-b py-2 leading-6"
                type="text"
                placeholder="Adam Gelius"
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
                placeholder="+1 1254 5211 552"
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
                className="bg-[#4f45e2] text-white font-[CamptonBook] font-medium text-xs md:text-base border-2 border-webbut-400 bg-webbut-400 hover:bg-black hover:text-webbut-400 cursor-pointer w-[8rem] items-center py-4 sm:py-2 md:py-3 my-4 rounded-lg mt-6"
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