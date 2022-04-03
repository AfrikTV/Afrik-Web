import '../styles/globals.css'
import Layout from '../components/layouts'

function MyApp({ Component, pageProps }) {

  
      const isLayoutNeeded = [`/dashboard`].includes(appProps.router.pathname);

      const LayoutComponent = isLayoutNeeded ? Layout : React.Fragment;


  return(
  <>
  <Layout>
  <Component {...pageProps} />

  </Layout>
  </>
  )
  
}

export default MyApp
