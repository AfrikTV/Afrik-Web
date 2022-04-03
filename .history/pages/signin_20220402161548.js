import React from "react";
import PropTypes from "prop-types";

const signin = (props) => {
  return (
    <div className="h-screen bg-[#060825]">
      <div className="signin-container flex  ">
        <div className="background-image w-full h-screen p-5">
          <h1>Connect with Amazing Africa Movies</h1>
        </div>

        <div className="signin-form bg-white w-full screen">
          <h1 className="auth-screen-heading">Welcome Back</h1>
        </div>
      </div>
    </div>
  );
};

signin.propTypes = {};

export default signin;
