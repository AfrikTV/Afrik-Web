import React from "react";
import PropTypes from "prop-types";

function whoiswatching(props) {
  const availableprofile = [
    {
      name: "Obiabo",
      image: "../public/assets/images/profileone.png",
    },
    {
      name: "Disu",
      image: "../public/assets/images/profileone.png",
    },
  ];
  return (
    <div className="text-center py-20 bg-white h-screen">
      <h1 className="font-black text-[25px]  lg:text-[30px]">
        Who is Watching ?
      </h1>

      <div className="availableprofile"></div>
    </div>
  );
}

export default whoiswatching;
