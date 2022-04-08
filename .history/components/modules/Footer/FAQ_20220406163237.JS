import React from "react";
import Accordion from "../../elements/Accordion";

const FrequentlyAskedQuestion = () => {
  return (
    <div className="py-10 font-inter">
      <h1 className="text-center text-3xl py-10 text-white font-black ">
        Got Questions? <span className="text-secondary">Look Here</span>
      </h1>

      <div className="input-container flex  space-x-5 py-10 items-center justify-center px-5   w-full">
        <div className="bg-primary rounded-xl w-2/4">
          <input
            type="email"
            className="input-field font-bold  text-white  rounded-xl placeholder-[#A7A7A7] w-full  px-10 py-4 outline-none"
          />
        </div>

        <button className="btn btn-primary font-bold bg-[#0B0E45] px-12 py-4 rounded-md text-white">
          Search
        </button>
      </div>

      <div className="faq">
        <Accordion />
      </div>
    </div>
  );
};

export default FAQ;
