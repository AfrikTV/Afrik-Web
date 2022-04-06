import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="question py-5 px-5 rounded-[18px]">
      <header className="flex justify-between bg-red-300 p-5 text  font-bold mx-auto">
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
      {expanded && (
        <p className="bg-red-100 p-5  font-bold text-white">
          {info}
        </p>
      )}
    </article>
  );
};

export default Question;
