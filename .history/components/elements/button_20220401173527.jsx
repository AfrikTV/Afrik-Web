import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-primary text-white font-bold py-2 px-4 rounded-lg p-20">
      {children}
    </button>
  );
};

export default Button;
