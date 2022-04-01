// layout in react for the index page of the website

import React from "react";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
const Layout = ({ children }) => {
  return (
    <div className="max-w-[90rem] mx-auto p-20">
      <Header />

      <main className="p-10 ">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
