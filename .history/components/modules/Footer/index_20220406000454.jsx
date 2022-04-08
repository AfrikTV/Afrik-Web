import React from "react";

import FAQ from "./faq.js";
const Footer = () => {
  return (
    <footer>
      <FAQ />

      <div className="font-inter subscribe-newsletter bg-[#060825] py-10 px-10 font-inter text-center ">
        <h1 className="text-white font-bold text-4xl ">
          Subscribe to our newsletter
        </h1>

        <div className="input-container flex space-x-5 py-10 items-center justify-center   w-full">
          <div className="bg-white rounded-xl w-3/4">
            <input
              type="email"
              className="input-field rounded-xl placeholder-[#A7A7A7] w-full  px-10 py-4 outline-none"
              placeholder="Email Address"
            />
          </div>

          <button className="btn btn-primary bg-secondary px-12 py-4 rounded-md text-white">
            Join
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
