import '../styles/globals.css'
import Layout from '../components/layouts'

function MyApp({ Component, pageProps , .. }) {
  const getContent = () => {
    if ([`/dashboard`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;

    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  };
  return <ApplicationWrapper>{getContent()}</ApplicationWrapper>;
}
export default MyApp
