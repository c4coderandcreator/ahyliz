import React from "react";
import Contact from "../../Home/Contact";
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <>
      <div className="bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/d61df2fc5f24d552268b46a9ea3bf0dd09530661/Resources/Legal/Hero.svg')] bg-cover">
        <div className="flex items-center justify-center w-full pt-[5rem]  ">
          <div
            className=" flex justify-center w-full sm:w-[11rem] gap-2 px-1 py-4 bg-white rounded-[2rem]"
            style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
          >
            <div className=" ">
              <img
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/1b251821991e6d732a7b9976d6ac2ff9841a5b28/Resources/Home/Icons/like-tag.svg"
                alt="img"
              />
            </div>
            <div className="text-center font-[LufgaMedium] text-[1.25rem]">
              <p>Legal</p>
            </div>
          </div>
        </div>
        <p className="text-center text-white font-[LufgaBold] text-[3.5rem] lg:text-[4.5rem] my-4">
          Learn How We Safeguard Your Data
        </p>
        <p className="text-center text-white font-[LufgaBook] text-[1.25rem]">
          Our Commitment to Keeping Your Information Secure
        </p>
        <div className="flex items-center mt-8 font-[LufgaBook] w-full justify-center">
          <Link to="/contact">
            <p className="px-[2rem] py-[0.8rem] bg-white rounded-lg text-[#4f45e2] hover:opacity-40">
              Contact us
            </p>
          </Link>
        </div>

        <div className="flex items-center justify-center text-white text-[1rem] py-6 pb-[4.5rem]">
          <div>
            <p className="tracking-[0.3rem] font-[LufgaSemiBold] mr-6">
              FOLLOW US
            </p>
          </div>
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
                id="pp"
                className="hover:opacity-40"
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Icons/facebook.png"
                alt="facebook"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 1st */}
      <div className=" py-[5rem] lg:px-[7.5rem] font-[LufgaLight] lg:text-[1.25rem]">
        <p className="font-[LufgaBold] lg:text-[2rem] pt-2 pb-[2rem]">
          Privacy Policy
        </p>
        <p className="pb-[2rem]">
          1. <span className="font-[LufgaSemiBold]">Introduction</span>
           Welcome to Ahyliz Technologies. We are committed to protecting <br />{" "}
          your privacy. This policy details the types of information we collect
          from our users,
          <br /> how we use it, and how we keep it secure.
        </p>
        <p className="pb-[2rem]">
          2.{" "}
          <span className="font-[LufgaSemiBold]">Information Collection</span>
           We collect information in the following ways:
        </p>

        <li className="ml-8">
          Information you provide when you register for an account, such as your
          name,
          <br /> email address, and telephone number.
        </li>
        <li className="ml-8 pb-[2rem]">
          Information about your use of our services, including but not
          limited to, traffic <br /> data and other communication data.
        </li>

        <p className="pb-[2rem]">
          3. <span className="font-[LufgaSemiBold]">Use of Information</span>
           The information we collect is used to:
        </p>

        <li className="ml-8">Provide, maintain, and improve our services.</li>
        <li className="ml-8">
          Send updates, security alerts, and support messages.
        </li>
        <li className="ml-8 pb-[2rem]">
          Monitor and analyze trends and usage.
        </li>
        <p className="pb-[2rem]">
          4. <span className="font-[LufgaSemiBold]">Data Sharing</span>  We do
          not share personal information with companies,
          <br />
          organizations, or individuals outside of Ahyliz Technologies except in
          the following <br /> cases:
        </p>

        <li className="ml-8">With your consent.</li>
        <li className="ml-8 pb-[2rem]">
          For legal reasons, such as to meet any applicable law, regulation,
          legal process,
          <br /> or enforceable governmental request.
        </li>

        <p className="pb-[2rem]">
          5. <span className="font-[LufgaSemiBold]">Security</span> We work hard
          to protect Ahyliz Technologies and our users from <br /> unauthorized
          access to or unauthorized alteration, disclosure, or destruction of{" "}
          <br /> information we hold.
        </p>

        <p className="pb-[2rem]">
          6. <span className="font-[LufgaSemiBold]">Changes</span> Our Privacy
          Policy may change from time to time. We will post any <br /> privacy
          policy changes on this page.
        </p>

        <p id="tou" className="pb-[2rem]">
          7. <span className="font-[LufgaSemiBold]">Contact Us</span> If you
          have any questions about this Privacy Policy, please contact <br />{" "}
          us at contact@ahyliz.com
        </p>
      </div>

      {/* 2nd */}
      <div className=" pb-[5rem] lg:px-[7.5rem] font-[LufgaLight] lg:text-[1.25rem]">
        <p className="font-[LufgaBold] lg:text-[2rem] pb-[2rem]">
          Terms of Use
        </p>

        <p className="pb-[2rem]">
          1. <span className="font-[LufgaSemiBold]">Introduction</span> By using
          our website (the "Service") operated by Ahyliz <br /> Technologies,
          you agree to be bound by these terms of use. Please read them <br />{" "}
          carefully.
        </p>

        <p className="pb-[2rem]">
          2. <span className="font-[LufgaSemiBold]">Using Our Services</span>
           You must follow any policies made available to you within the <br />{" "}
          Service. Do not misuse our Services, for example, do not interfere
          with our Services <br /> or try to access them using a method other
          than the interface and the instructions <br /> that we provide.
        </p>

        <p className="pb-[2rem]">
          3.{" "}
          <span className="font-[LufgaSemiBold]">
            Your Content in Our Services
          </span>
           You retain ownership of any intellectual property <br /> rights that
          you hold in that content. When you upload or otherwise submit content{" "}
          <br /> to our Services, you give Ahyliz Technologies a worldwide
          license to use, host, store, <br /> reproduce, modify, create
          derivative works, communicate, publish, publicly perform, <br />{" "}
          publicly display and distribute such content.
        </p>

        <p className="pb-[2rem]">
          4.{" "}
          <span className="font-[LufgaSemiBold]">
            About Software in Our Services
          </span>
           When a Service requires or includes <br />
          downloadable software, this software may update automatically on your
          device <br /> once a new version or feature is available.
        </p>

        <p className="pb-[2rem]">
          5.{" "}
          <span className="font-[LufgaSemiBold]">
            Modifying and Terminating Our Services
          </span>
           We are constantly changing and <br /> improving our Services. We may
          add or remove functionalities or features, and we <br /> may suspend
          or stop a Service altogether.
        </p>
        <br />
        <p className="pb-[2rem]">
          6.{" "}
          <span className="font-[LufgaSemiBold]">
            Liability for Our Services
          </span>
           When permitted by law, Ahyliz Technologies will not be <br />{" "}
          responsible for lost profits, revenues, or data.
        </p>

        <p className="pb-[2rem]">
          7. <span className="font-[LufgaSemiBold]">About these Terms</span>
           We may modify these terms or any additional terms that <br /> apply
          to a Service. You should look at the terms regularly.
          <span className="font-[LufgaSemiBold]"></span>
        </p>
      </div>

      {/* 3rd */}
      <div className=" pb-[5rem] lg:px-[7.5rem] font-[LufgaLight] lg:text-[1.25rem]">
        <p className="font-[LufgaBold] lg:text-[2rem] pb-[2rem]">
          Accessibility Statement
        </p>

        <p className="pb-[2rem]">
          1. <span className="font-[LufgaSemiBold]">Commitment</span>
           &nbsp;Ahyliz Technologies is committed to ensuring digital
          accessibility <br /> for people with disabilities. We are continually
          improving the user experience for <br /> everyone and applying the
          relevant accessibility standards.
        </p>

        <p className="pb-[2rem]">
          2. <span className="font-[LufgaSemiBold]">Feedback</span> We welcome
          your feedback on the accessibility of our website. Please <br /> let
          us know if you encounter accessibility barriers on Ahyliz
          Technologies: <br /> contact@ahyliz.com
        </p>

        <p className="pb-[2rem]">
          3.{" "}
          <span className="font-[LufgaSemiBold]">
            Measures to Support Accessibility
          </span>
          &nbsp;Ahyliz Technologies takes the following <br /> measures to
          ensure accessibility:
        </p>
        <li className="ml-[2rem]">
          Including accessibility as part of &nbsp;&nbsp;&nbsp;&nbsp; our
          mission statement.
        </li>
        <li className="ml-[2rem]">
          Integrating accessibility into our &nbsp;&nbsp;&nbsp;&nbsp;
          procurement practices.
        </li>
        <li className="pb-[2rem] ml-[2rem]">
          Providing continual accessibility &nbsp;&nbsp;&nbsp;&nbsp; training
          for our staff.
        </li>

        <p className="pb-[2rem]">
          4.{" "}
          <span className="font-[LufgaSemiBold]">
            Compatibility with Browsers and Assistive Technology &nbsp;
          </span>
          Our goal is to ensure <br /> compatibility with the latest version of
          major browsers and assistive technologies.
        </p>
      </div>
      <Contact />
    </>
  );
};

export default Legal;
