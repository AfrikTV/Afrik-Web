import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const SidebarItem = ({
  children,
  text,
  customStyle,
  onClick,
  textCustomStyle,
  href,
}) => {
  return (
    <Link href={href} passHref>
      <div
        title={text}
        onClick={onClick}
        className={
          "flex items-center space-x-2 py-2 px-4 rounded-lg hover:bg-gray-100 cursor-pointer " +
          customStyle
        }
      >
        <>{children}</>
        <p
          className={
            "font-medium hidden sm:inline-flex group-hover:text-primary " +
            textCustomStyle
          }
        >
          {text}
        </p>
      </div>
    </Link>
  );
};

export default SidebarItem;
