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
    <div className={
      "rounded-xl flex flex-col justify-center items-center w-[80%] space-x-2 p-4 rounded-lg hover:bg-gray-100 cursor-pointer " +
      customStyle
    }>

      <div onClick={onClick} className="flex flex-row items-center gap-2" >
        <>{children}</>
        <p
          className={"font-medium text-lg group-hover:text-[#07092C] " + textCustomStyle}
        >
          {text}
        </p>
      </div>
    </div >
  );
};

export default SidebarItem;
