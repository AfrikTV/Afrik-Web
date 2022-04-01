// layout in react for the index page of the website

const Layout = ({ children }) => {
    return (
    
        <Header />
  
        <main>{children}</main>
  
        <Footer />
      </LayoutStyled>
    );
  };
  
  export default Layout;