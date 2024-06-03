import React from "react";
import Accordion from "../Accordion/Accordion";

const Faq = () => {
  return (
    <>
      <div className="flex bg-[url('https://raw.githubusercontent.com/c4coderandcreator/ahyliz/main/Resources/Home/Images/bgFAQs.png')] bg-cover justify-center gap-20 pb-14">
        {/* 1st */}
        <div className="pt-48">
          <div
            className="flex justify-center w-[14rem] gap-2 px-1 py-4 bg-white rounded-[2rem]"
            style={{ boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.05)" }}
          >
            <div className=" ">
              <img
                src="https://raw.githubusercontent.com/c4coderandcreator/ahyliz/55ea6f2e9103d76a7d626d2f12df297e89be99e9/Resources/Home/Icons/message-question.svg"
                alt="img"
              />
            </div>
            <div className="text-center font-[CamptonMedium] text-[1.25rem] ">
              <p>Got Question?</p>
            </div>
          </div>
          <p className="font-[CamptonBold] text-[2rem] py-[2rem]">
            Frequently Asked Questions
          </p>
          <p className="font-[CamptonBook] text-[1.25rem] pb-[2rem]">
            Learn more about the range of services provided by <br /> Ahyliz
            Technologies, including;
          </p>
          <p className="font-[CamptonBook] text-[1.25rem] pb-[1rem]">
            1. Enterprise Digital Transformation
          </p>
          <p className="font-[CamptonBook] text-[1.25rem] pb-[1rem]">
            2. Cloud Consulting
          </p>
          <p className="font-[CamptonBook] text-[1.25rem] pb-[1rem]">
            3. Managed IT Services
          </p>
          <p className="font-[CamptonBook] text-[1.25rem] pb-[3rem]">
            4. Software Development.
          </p>
          <p className="w-[13.5rem] px-14 py-4 bg-[#0044ea] rounded-lg text-white text-center font-[CamptonMedium]">
            Ask Question
          </p>
        </div>
        {/* 2nd */}
        <div className="pt-48">
          <div className="p-4">
            <Accordion
              title="What is Ahyliz Technologies?"
              answer="Ahyliz Technologies is a leading IT service provider specializing in innovative technology solutions tailored to meet the diverse needs of businesses."
            />
            <Accordion
              title="Does Ahyliz Technologies offer job opportunities?"
              answer="Yes, Ahyliz Technologies is always on the lookout for talented and passionate individuals to join our team. We offer a range of career opportunities in various fields such as software development, data analysis, project management, and more. Our dynamic work environment fosters growth and innovation, making it an ideal place for professionals to advance their careers. Check out our careers page on our website for current openings and application details."
            />
            <Accordion
              title="What services does Ahyliz Technologies offer?"
              answer="Ahyliz Technologies offers a comprehensive suite of IT services designed to address the unique challenges of modern businesses. Our services include software development, cloud computing solutions, cybersecurity, data analytics, and IT consulting. We pride ourselves on delivering customized solutions that drive efficiency, innovation, and growth for our clients."
            />
            <Accordion
              title="What industries does Ahyliz Technologies serve?"
              answer="Ahyliz Technologies serves a diverse range of industries, including healthcare, finance, retail, manufacturing, and education. Our expertise in these sectors allows us to provide tailored technology solutions that meet the specific needs and regulatory requirements of each industry. By leveraging our deep industry knowledge, we help our clients achieve their business objectives and stay ahead of the competition."
            />
            <Accordion
              title="How to contact Ahyliz Technologies?"
              answer="You can easily get in touch with Ahyliz Technologies through various channels. Visit our website and fill out the contact form, or send us an email at contact@ahyliz.com. For more immediate inquiries, you can also call our customer service hotline at (123) 456-7890. Additionally, we are active on social media platforms like LinkedIn, Twitter, and Facebook, where you can follow us for updates and reach out with any questions. We look forward to connecting with you!"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
