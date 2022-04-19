// layout in react for the index page of the website

import React from "react";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
const Layout = ({ children }) => {
  return (
    <>
      <div className="home-container max-w-[90rem] mx-auto lg:px-10">
        <Header />

        <div className="main">{children}</div>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
