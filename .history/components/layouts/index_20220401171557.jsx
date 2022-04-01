// layout in react for the index page of the website

import React from 'react';
import Footer from 
const Layout = ({ children }) => {
    return (
    
        <Header />
  
        <main>{children}</main>
  
        <Footer />
   
    );
  };
  
  export default Layout;