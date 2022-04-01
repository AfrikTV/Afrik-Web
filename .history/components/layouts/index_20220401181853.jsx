// layout in react for the index page of the website

import React from "react";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />

      <main className="p-10 2xl:max-w-[90rem] mx-auto">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
