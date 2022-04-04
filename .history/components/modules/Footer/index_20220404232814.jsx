import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="subscribe-newsletter bg-[#060825] py-5 font-inter text-center ">
        <h1 className="text-white font-bold text-4xl ">
          Subscribe to our newsletter
        </h1>

        <div className="input-container">
          <input
            type="email"
            className="input-field"
            placeholder="Email Address"
          />

          <button className="btn btn-primary">Join</button>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
