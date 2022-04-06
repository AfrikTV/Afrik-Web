import React from "react";
import Accordion from "../../elements/Accordion";

const FAQ = () => {
  return (
    <div className="bg-[#07092C] py-10">
      <h1 className="text-center text-3xl py-10 text-white font-black ">
        Got Questions? <span className="text-secondary">Look Here</span>
      </h1>

      <div className="faq p-5 m-auto">
        <Accordion />
      </div>
   
    </div>
  );
};

export default FAQ;
