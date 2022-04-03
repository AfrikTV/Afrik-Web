import React from "react";
import PropTypes from "prop-types";
import userImg from "../public/user.png";
import Image from "next/image";
const signin = (props) => {
  return (
    <div className="h-screen ">
      <div className="signin-container flex  ">
        <div className="background-image w-full  h-screen p-10 bg-[#060825] text-white">
         
          <div className="content">


          </div>
        
        </div>

        <div className="signin-form bg-white w-full h-screen px-5 py-14">
          <h1 className="auth-screen-heading">Welcome Back</h1>
          <h3 className="auth-screen-heading2">insert your details</h3>
        </div>

        <form></form>
      </div>
    </div>
  );
};

signin.propTypes = {};

export default signin;
