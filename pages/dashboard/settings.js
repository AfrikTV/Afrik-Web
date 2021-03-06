import Head from "next/head";
import Settings from "../../components/modules/Dashboard/Settings";

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Afrik Web | Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Settings />
    </div>
  );
};

export default Dashboard;
