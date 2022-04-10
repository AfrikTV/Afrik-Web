import React, { useState } from "react";
import userImg from "../public/user.png";
import Image from "next/image";
const Verify = (props) => {
  return (
    <div className="h-screen font-inter  ">
      <div className="forgetpassword-container flex  ">
        <div className="background-auth w-full lg:flex hidden items-center justify-center h-screen p-10 bg-[#060825] text-white">
          <div className="content flex flex-col">
            <h1 className=" auth-connect-heading ">
              Connect
              <br />
              with Amazing <br /> Africa Movies
            </h1>

            <div className="user-image self-center py-5">
              <Image src={userImg} alt="user" />
            </div>
          </div>
        </div>

        <div className="signin-form bg-white w-full h-screen px-10 py-14">
          <h1 className="auth-screen-heading">Forgotton Password</h1>
          <h3 className="auth-screen-heading2 py-5">
            We sent a 6 digits code to your email
          </h3>

          <form className="py-12">
            <div className="otp-container py-5 w-full">
              <div className="otp">
                <input
                  type={"text"}
                  className="h-[63px] w-[67px] border-[#E3E0E0] border-  bg-[#FAFAFA] outline-none"
                />
              </div>
            </div>

            <div className="button flex justify-center items-center w-full mx-auto mt-10 ">
              <button
                type="submit"
                className="p-5 rounded-xl w-96 bg-primary text-center text-white font-black"
              >
                Reset Passoword
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;
