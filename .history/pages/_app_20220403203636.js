import React from 'react'
import "../styles/globals.css";
import Layout from "../components/layouts";

function MyApp({ Component, pageProps, ...appProps }) {
  // removed the header and footer from the layout for auth pages
  const isLayoutNeeded = [`/signin`].includes(appProps.router.pathname);

  const LayoutComponent = !isLayoutNeeded ? Layout : <>>;

  return (
    <>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
}

export default MyApp;
