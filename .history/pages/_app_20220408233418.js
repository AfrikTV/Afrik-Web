import React from "react";
import "../styles/globals.css";
import Layout from "../components/layouts";
import DashboardLayout from "../components/layouts/DashboardLayout";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps, ...appProps }) {
  // removed the header and footer from the layout for auth pages
  const isLayoutNeeded = [`/signin`, `/forgetpassword` `verify` , `/signup`].includes(
    appProps.router.pathname
  );
  // dashboard layout <<If there's a better way, you can implement it>>
  const isDashboardLayout = [
    `/dashboard`,
    "/dashboard/billing",
    "/dashboard/activities",
    "/dashboard/settings",
  ].includes(appProps.router.pathname);

  const LayoutComponent = isDashboardLayout
    ? DashboardLayout
    : !isLayoutNeeded
    ? Layout
    : React.Fragment;

  return (
    <>
      <Provider store={store}>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
