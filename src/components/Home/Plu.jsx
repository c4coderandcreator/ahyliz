import React from "react";
import DoubleP from "../HomeSecBg/DoubleP";
import WhiteA from "../HomeSecBg/WhiteA";
import DoubleW from "../HomeSecBg/DoubleW";
import PurpleA from "../HomeSecBg/PurpleA";

const Plu = () => {
  return (
    <>
      {/* PLU */}
      <div className="mx-4 lg:px-[7.5rem] sm:pt-10 pt-10">
        <div className="flex justify-center w-auto items-center">
          <div
            className="flex justify-center w-full sm:w-[14rem] gap-2 px-4 py-4 bg-white rounded-[2rem]"
            style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
          >
            <div>
              <img src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/55ea6f2e9103d76a7d626d2f12df297e89be99e9/Resources/Home/Icons/heart.svg" />
            </div>
            <div className="text-center font-[LufgaMedium] text-[1.25rem]">
              <p>People Love Us</p>
            </div>
          </div>
        </div>
        <p className="text-center font-[LufgaBold] text-[2rem] my-4">
          Discover Our Clients' Experiences
        </p>
        <p className="text-center font-[LufgaBook] text-[1.25rem]">
          Insights from satisfied customers
        </p>
        {/* parent */}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 sm:px-[6.5rem] mt-4">
          {/* child 1 */}
          <div className="flex flex-col text-center items-center mt-4 sm:mt-8 w-full">
            <div
              className="flex flex-col text-center items-center p-2 lg:p-4 rounded-2xl w-full"
              style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.10)" }}
            >
              <div className="py-3">
                <DoubleP />
              </div>
              <div className="px-2 sm:px-8 font-[LufgaLight] text-[0.8rem] sm:text-[1rem] mb-6">
                Managed IT services by Ahyliz Technologies ensured our systems{" "}
                ran smoothly, allowing us to focus on core business operations.
              </div>
            </div>
            <div>
              <WhiteA />
            </div>
            <div className="mt-4 flex flex-col items-center pb-10 sm:pb-[5rem]">
              <img
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Icons/User%20Image%2003.png"
                alt="img"
              />
              <p className="text-center font-[LufgaSemiBold] pt-1">Stephen</p>
              <p className="text-center font-[LufgaBook]">@client</p>
            </div>
          </div>
          {/* child 2 */}
          <div className="flex flex-col text-center items-center mt-4 sm:mt-8 w-full">
            <div className="flex flex-col items-center bg-[#4f45e2] text-center p-2 lg:p-4 rounded-2xl w-full">
              <div className="py-3">
                <DoubleW />
              </div>
              <div className="sm:px-8 text-white font-[LufgaLight] text-[0.8rem] sm:text-[1rem] mb-6">
                Impressive cloud consulting services from Ahyliz Technologies.
                Seamless transition and improved{" "}
                <br className="hidden lg:block" /> efficiency!
              </div>
            </div>
            <div>
              <PurpleA />
            </div>
            <div className="mt-4 flex flex-col items-center pb-10 sm:pb-[5rem]">
              <img
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Icons/User%20Image%2002.png"
                alt="img"
              />
              <p className="text-center font-[LufgaSemiBold] pt-1">Alen Max</p>
              <p className="text-center font-[LufgaBook]">@client</p>
            </div>
          </div>
          {/* child 3 */}
          <div className="flex flex-col text-center items-center mt-4 sm:mt-8 w-full">
            <div
              className="flex flex-col text-center items-center p-2 lg:p-4 rounded-2xl w-full"
              style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.10)" }}
            >
              <div className="py-3">
                <DoubleP />
              </div>
              <div className="px-4 sm:px-8 font-[LufgaLight] text-[0.8rem] sm:text-[1rem] mb-6">
                Ahyliz Technologies transformed our outdated systems into
                efficient digital solutions. Highly recommend their expertise!
              </div>
            </div>
            <div>
              <WhiteA />
            </div>
            <div className="mt-4 flex flex-col items-center pb-[2rem] sm:pb-[5rem]">
              <img
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Icons/User%20Image%2003-1.png"
                alt="img"
              />
              <p className="text-center font-[LufgaSemiBold] pt-1">Sarah</p>
              <p className="text-center font-[LufgaBook]">@client</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plu;
