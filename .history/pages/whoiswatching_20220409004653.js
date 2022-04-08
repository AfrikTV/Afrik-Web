import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import profileone from "../public/assets/images/profileone.png";
import profiletwo from '../public/assets/images/profiletwo.png'
function whoiswatching(props) {
  const availableprofile = [
    {
      name: "Obiabo",
      image: profileone,
    },
    {
      name: "Disu",
      image: profiletwo,
    },
  ];
  return (
    <div className="text-center py-28 bg-white h-screen px-10">
      <h1 className="font-black text-[25px]  lg:text-[30px]">
        Who is Watching ?
      </h1>
<div class="w-96"></div>
   
  );
}

export default whoiswatching;
