import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-primary text-md text-white font-medium rounded-lg px-9 hover:transition-transform py-4 hover:bg-white border-2 hover:text-primary hover:border-primary">
      <p className="w-max">{children}</p>
    </button>
  );
};

export default Button;
