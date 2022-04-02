import React from 'react'
import "../styles/globals.css";
import Layout from "../components/layouts";

function MyApp({ Component, pageProps, ...appProps } ) {
  const isLayoutNeeded = [`/sigin`].includes(appProps.router.pathname);

  const LayoutComponent = !isLayoutNeeded ? Layout : React.Fragment;

  return (
    <>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
}

export default MyApp;
