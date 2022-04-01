// layout in react for the index page of the website

import React from "react";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="p-10 max-w-[103rem] mx-auto">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
