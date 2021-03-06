import Head from "next/head";
import Activities from "../../components/modules/Dashboard/Activities";

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Afrik Web | Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Activities />
    </div>
  );
};

export default Dashboard;
