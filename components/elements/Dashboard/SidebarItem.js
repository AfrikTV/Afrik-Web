import React from "react";
import { useSelector } from "react-redux";

const SidebarItem = ({
  children,
  text,
  customStyle,
  onClick,
  textCustomStyle,
}) => {
  return (
    <div
      onClick={onClick}
      className={
        "flex items-center space-x-2 py-2 px-4 rounded-lg hover:bg-gray-100 cursor-pointer " +
        customStyle
      }
    >
      <>{children}</>
      <p
        className={"font-medium group-hover:text-[#07092C] " + textCustomStyle}
      >
        {text}
      </p>
    </div>
  );
};

export default SidebarItem;
