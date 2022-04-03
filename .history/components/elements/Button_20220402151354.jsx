import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-primary text-white font-bold  rounded-lg px-9 py-3 hover:bg-white hover:border-">
      {children}
    </button>
  );
};

export default Button;
