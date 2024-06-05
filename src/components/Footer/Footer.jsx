import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-[18rem] sm:mt-0 h-full sm:h-[26rem] bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Images/bgFooter.png')] bg-cover flex flex-col text-white font-[CamptonBook] text-[1.25rem]">
        <div className="flex flex-wrap justify-start sm:justify-center gap-4 sm:gap-16 sm:items-center sm:my-[5rem] sm:mx-[5rem] pl-4 sm:pl-0">
          <div className="h-full mt-8 sm:mt-0">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/9e38a1525ab1632548ca85384952b0b9d8bd9dd2/Resources/Home/Images/Logo-1.svg"
              alt="img"
            />
            <p className="text-[1rem]">
              Empowering Your Digital <br /> Future
            </p>
            <div className="flex gap-5 items-center py-3">
              <div>
                <img
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Icons/instagram.png"
                  alt="insta"
                />
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Icons/linkedin.png"
                  alt="linkedin"
                />
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Icons/twitter.png"
                  alt="twitter"
                />
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Icons/facebook.png"
                  alt="facebook"
                />
              </div>
            </div>
          </div>
          <div className="sm:border-r border-custom-rgba pr-14 leading-[2.2rem]">
            <p className="font-[CamptonSemiBold]">Home</p>
            <p>Explore more</p>
            <p>Services we offer</p>
            <p>Careers</p>
            <p>FAQs</p>
            <p>Contact us</p>
          </div>
          <div className="sm:border-r border-custom-rgba pr-14 leading-[2.2rem]">
            <p className="font-[CamptonSemiBold]">About us</p>
            <p>How it Works?</p>
            <p>Our Team</p>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>Accessibility</p>
          </div>
          <div className="sm:border-r border-custom-rgba h-full pr-14 leading-[2.2rem]">
            <p className="font-[CamptonSemiBold]">Address</p>
            <p>
              34 Minowan Miikan <br /> Lane, Toronto, ON <br /> M6J 0G3
            </p>
          </div>
          <div className="sm:border-r border-custom-rgba h-full pr-14 leading-[2.2rem] pb-4 sm:pb-0">
            <p className="font-[CamptonSemiBold]">Contact us</p>
            <p>Tel: +1 (844) 400-7222</p>
            <p>Fax: +1 (844) 709-7333</p>
            <p>info@ahyliz.ca</p>
            <p>contact@ahyliz.ca</p>
          </div>
        </div>
        <div className="border-t border-custom-rgba flex items-center justify-center text-center py-6 sm:py-3 text-[0.875rem]">
          © 2024 Rights Reserved By Ahyliz Technologies
        </div>
      </div>
    </>
  );
};

export default Footer;
