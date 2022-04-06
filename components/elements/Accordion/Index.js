import { useState } from "react";

import data from "./data";
import SingleQuestion from "./Question";

const Accordion = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="">
        <section className="info p-5">
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Accordion;
