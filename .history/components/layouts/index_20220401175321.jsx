// layout in react for the index page of the website

import React from "react";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
