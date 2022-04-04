import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="subscribe-newsletter bg-[#060825] py-10 px-10 font-inter text-center ">
        <h1 className="text-white font-bold text-4xl ">
          Subscribe to our newsletter
        </h1>

        <div className="input-container flex space-x-5 py-10 mx-auto items-center">
          <div className="bg-white rounded-2xl">
            <input
              type="email"
              className="input-field rounded-2xl  px-10 py-5 outline-none"
              placeholder="Email Address"
            />
          </div>

          <button className="btn btn-primary bg-secondary px-10 py- rounded-2xl text-white">
            Join
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
