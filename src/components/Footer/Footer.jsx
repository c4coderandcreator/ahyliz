import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_SI2,
        import.meta.env.VITE_REACT_TI2,
        form.current,
        {
          publicKey: import.meta.env.VITE_REACT_PK,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          const successAlert = document.createElement("div");
          successAlert.className =
            "bg-green-500 text-white px-4 py-2 rounded-md fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
          successAlert.textContent = "Your request has been sent successfully";
          document.body.appendChild(successAlert);
          setTimeout(() => {
            document.body.removeChild(successAlert);
          }, 3000);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          const errorAlert = document.createElement("div");
          errorAlert.className =
            "bg-red-500 text-white px-4 py-2 rounded-md fixed top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
          errorAlert.textContent =
            "There is some server issue , please mail me at : info@teckube.io";
          document.body.appendChild(errorAlert);
          setTimeout(() => {
            document.body.removeChild(errorAlert);
          }, 30000);
        }
      );
  };
  return (
    <>
      <div className="mt-[15rem] sm:mt-0 h-auto lg:h-auto bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Images/bgFooter.png')] bg-cover  text-white font-[LufgaLight] text-[1rem]">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 mt-[3rem] pt-[2.5rem] justify-start sm:justify-between gap-4 lg:gap-4 sm:items-center sm:my-[2rem] md:my-[3rem] lg:my-[2rem] md:mx-[0.5rem] lg:mx-[4.5rem] pl-4 sm:pl-0">
          <div className="justify-items-center h-full mt-8 sm:mt-0">
            <img
              className=" h-[3.75rem] w-[10rem] mb-4"
              src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/AT%20LOGO-W.png"
              alt="Ahyliz Technologies Logo"
            />
            <p className="text-[1rem]">Empowering Your Digital Future</p>
            <div className="flex gap-5 items-center py-3">
              <div>
                <img
                  className="hover:opacity-40"
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Icons/instagram.png"
                  alt="insta"
                />
              </div>
              <div>
                <img
                  className="hover:opacity-40"
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Icons/linkedin.png"
                  alt="linkedin"
                />
              </div>
              <div>
                <img
                  className="hover:opacity-40"
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Icons/twitter.png"
                  alt="twitter"
                />
              </div>
              <div>
                <img
                  className="hover:opacity-40"
                  src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Icons/facebook.png"
                  alt="facebook"
                />
              </div>
            </div>
          </div>
          <div className="justify-self-auto xl:border-r xl:border-l border-custom-rgba lg:px-4 leading-[2.2rem] lg:pl-8 h-full">
            <p className="font-[LufgaBold] text-[1.5rem]">Home</p>
            <Link to="/about">
              <p className="hover:opacity-40">Explore more</p>
            </Link>
            <Link to="/services">
              <p className="hover:opacity-40">Services we offer</p>
            </Link>
            <Link to="/careers">
              <p className="hover:opacity-40">Careers</p>
            </Link>{" "}
            <HashLink to="/contact#faq">
              <p className="hover:opacity-40">FAQs</p>
            </HashLink>
            <Link to="/contact">
              <p className="hover:opacity-40">Contact us</p>
            </Link>
          </div>
          <div className="justify-self-auto xl:border-r border-custom-rgba lg:px-4 leading-[2.2rem] h-full">
            <p className="font-[LufgaBold] text-[1.5rem]">About us</p>
            <Link to="/services">
              <p className="hover:opacity-40">How it Works?</p>
            </Link>
            <HashLink to="/about#ot">
              <p className="hover:opacity-40">Our Team</p>
            </HashLink>

            <HashLink to="/legal#pp">
              <p className="hover:opacity-40">Privacy Policy</p>
            </HashLink>
            <HashLink to="/legal#tou">
              <p className="hover:opacity-40">Terms of use</p>
            </HashLink>
            <HashLink to="/contact#acc">
              <p className="hover:opacity-40">Accessibility</p>
            </HashLink>
          </div>
          <div className="justify-self-auto xl:border-r border-custom-rgba lg:px-4 h-full leading-[2.2rem]">
            <p className="font-[LufgaBold] text-[1.5rem] ">Address</p>
            <Link
              to="https://maps.app.goo.gl/MaYpmND9nCKTXZVA9"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="hover:opacity-40">
                34 Minowan Miikan Ln,
                <br /> Toronto, ON <br /> Canada <br /> M6J 0G3
              </p>
            </Link>
          </div>
          <div className="justify-self-auto xl:border-r border-custom-rgba lg:px-4 h-full leading-[2.2rem] pb-4 sm:pb-0">
            <p className="font-[LufgaBold] text-[1.5rem]">Contact us</p>
            <Link to="tel:+1 (844) 400-7222">
              <p className="hover:opacity-40">Tel: +1 (844) 400-7222</p>
            </Link>

            <p className="hover:opacity-40">Fax: +1 (844) 709-7333</p>
            <Link to="mailto:info@ahyliz.ca">
              <p className="hover:opacity-40">Email: info@ahyliz.ca</p>
            </Link>

            {/* <Link to="mailto:contact@ahyliz.ca">
              <p className="hover:opacity-40">Email: contact@ahyliz.ca</p>
            </Link> */}
          </div>
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col pr-4 sm:pr-0 sm:px-4"
            >
              <label className="font-[LufgaBold] text-[1.5rem]">
                Request a callback
              </label>
              <input
                className="py-2 my-1 rounded-lg text-black"
                type="text"
                name="user_name"
                placeholder="&nbsp; Your Name"
                required
              />
              <input
                className="py-2 my-1 rounded-lg text-black"
                type="text"
                name="user_email"
                placeholder="&nbsp; Your Email"
                required
              />
              <input
                className="py-2 my-1 rounded-lg text-black"
                type="text"
                name="user_phone"
                placeholder=" &nbsp; Your Contact"
                required
              />
              <input
                className="bg-[#4f45e2] text-white font-[LufgaBook] font-medium text-base  md:text-base border-2 border-webbut-400 bg-webbut-400 hover:opacity-40 cursor-pointer w-[8rem] items-center py-3 sm:py-2 md:py-3 my-3 sm:my-2 rounded-lg "
                type="submit"
                value="Request"
                required
              />
            </form>
          </div>
        </div>
        <div className="border-t border-custom-rgba flex items-center justify-center text-center py-6 sm:py-7 text-[0.875rem]">
          © 2024 Ahyliz Technologies | All rights reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
