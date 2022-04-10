import React from "react";

function Card({ plan, price, cardBg, wavyBg }) {
  return (
    <div
      style={{ background: cardBg }}
      className="flex h-36 sm:h-48 w-48 sm:w-96 text-white flex-col rounded-lg p-5 sm:p-10 sm:pl-14 space-y-5 relative scale-90 lg:scale-100"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Current Plan</h3>
        <p className="text-sm font-normal">{plan}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium">N{price}</p>
      </div>
      <div className="wavy absolute bottom-0 -mx-5 sm:-m-10 sm:-ml-14 h-[50px] sm:h-[75px]">
        <p
          style={{ textDecorationColor: wavyBg }}
          className="wavy__text text-[75px] sm:text-[100px]"
        >
          WWWW
        </p>
      </div>
    </div>
  );
}

export default Card;
