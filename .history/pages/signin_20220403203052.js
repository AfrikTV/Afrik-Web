import React from "react";
import PropTypes from "prop-types";

const signin = (props) => {
  return (
    <div className="h-screen ">
      <div className="signin-container flex  ">
        <div className="background-image w-full h-screen p-5 hidden lg:block bg-[#060825] text-white">
          <h1 className="50px">Connect with Amazing Africa Movies</h1>
        </div>

        <div className="signin-form bg-white w-full screen px-5 py-14">
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
