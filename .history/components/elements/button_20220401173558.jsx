import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-primary text-white font-bold  rounded-lg p-">
      {children}
    </button>
  );
};

export default Button;
