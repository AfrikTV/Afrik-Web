import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import profileone from "../public/assets/images/profileone.png";
import profiletwo from '../p'
function whoiswatching(props) {
  const availableprofile = [
    {
      name: "Obiabo",
      image: profileone,
    },
    {
      name: "Disu",
      image: profileone,
    },
  ];
  return (
    <div className="text-center py-20 bg-white h-screen">
      <h1 className="font-black text-[25px]  lg:text-[30px]">
        Who is Watching ?
      </h1>

      <div className="availableprofile flex justify-center py-10 space-x-7 items-center">
        {availableprofile.map((i) => (
          <div key={i.name} className="">
            <Image src={i.image} alt={i.name} unoptimized />

            <h2 className="font-bold text-[25px] lg:text-[30px]">{i.name}</h2>
          </div>
        ))}

        <div className="addprofile flex flex-col cursor-pointer ">
          <div className="svg flex items-center flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M12.6818 32.4773V0.295452H20.8182V32.4773H12.6818ZM0.659091 20.4545V12.3182H32.8409V20.4545H0.659091Z"
                fill="black"
              />
            </svg>
          </div>
          <h3 className="text-base font-bold py-3 ">Add new profile</h3>
        </div>
      </div>
    </div>
  );
}

export default whoiswatching;
