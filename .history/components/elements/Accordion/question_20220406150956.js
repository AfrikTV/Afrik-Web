import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="question p-6 rounded-[18px]  bg-[#050729]  shadow-2xl mb-10  m-5 w-2/4 mx-auto ">
      <header className="flex items-center justify-between text  font-bold mx-auto w-full">
        <h4
          onClick={() => setExpanded(!expanded)}
          className="text-white question-title text-xl cursor-pointer text "
        >
          {title}
        </h4>
        <button
          className="btn text-white text-3xl font-bold"
          onClick={() => setExpanded(!expanded)}
        >
          {!expanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M9.17756 25.4318V0.204546H16.8139V25.4318H9.17756ZM0.382102 16.6364V9H25.6094V16.6364H0.382102Z"
                fill="#EAE1E1"
              />
            </svg>
          ) : (
            <AiOutlineM />
          )}
        </button>
      </header>
      {expanded && <p className=" pt-5 font-bold text-white">{info}</p>}
    </article>
  );
};

export default Question;
