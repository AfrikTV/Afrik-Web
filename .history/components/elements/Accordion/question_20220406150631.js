import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="question p-6 rounded-[18px]  bg-[#050729]  shamb-10  m-5 w-3/4 mx-auto ">
      <header className="flex justify-between text  font-bold mx-auto w-full">
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
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && <p className=" pt-5 font-bold text-white">{info}</p>}
    </article>
  );
};

export default Question;
