import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="question">
      <header className="flex bg-[#050729] p-5 font-bold">
        <h4
          onClick={() => setExpanded(!expanded)}
          className="text-white question-title text-xl cursor-pointer "
        >
          {title}
        </h4>
        <button
          className="btn text-white"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && <p className="bg-[#050729] p-5 font-bold text-white">{info}</p>}
    </article>
  );
};

export default Question;
