// layout in react for the index page of the website

const Layout = ({ children }) => {
    return (
      <LayoutStyled>
        <Header />
  
        <main>{children}</main>
  
        <Footer />
      </LayoutStyled>
    );
  };
  
  export default Layout;