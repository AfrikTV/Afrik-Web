import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="subscribe-newsletter bg-[#060825] py-10 px-10 font-inter text-center ">
        <h1 className="text-white font-bold text-4xl ">
          Subscribe to our newsletter
        </h1>

        <div className="input-container flex space-x-5">
          <div className="
          "></div>
          <input
            type="email"
            className="input-field rounded-2xl w-full p-4"
            placeholder="Email Address"

          />

          <button className="btn btn-primary bg-secondary p-3 rounded-xl text-white">
            Join
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
