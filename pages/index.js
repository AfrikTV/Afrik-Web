import Head from 'next/head';
import Hero from '../components/modules/LandingPage/Hero';
import Hero2 from '../components/modules/LandingPage/Hero2'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Afrik Web</title>
        <meta name="description" content="Afrik TV, the nigerian netflix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Hero />
      <Hero2 />
      
      
    </div>
  )
}
