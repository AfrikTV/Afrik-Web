import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="subscribe-newsletter bg-[#060825] py-5 font-inter text-center ">
        <h1 className="text-white font-bold text-4xl ">
          Subscribe to our newsletter
        </h1>

        <div className="input-container flex space-x-5">
          <input
            type="email"
            className="input-field roun"
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