import "../styles/globals.css";
import Layout from "../components/layouts";

function MyApp({ Component, pageProps, ...appProps } : AppProps) {
  const isLayoutNeeded = [`/signin`].includes(appProps.router.pathname);

  const LayoutComponent = isLayoutNeeded ? Layout : React.Fragment;

  return (
    <>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
}

export default MyApp;
