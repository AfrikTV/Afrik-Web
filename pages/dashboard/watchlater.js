import Head from "next/head";
import WatchLaterComponent from "../../components/modules/Dashboard/WatchLater";

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Afrik Web | Dashboard</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WatchLaterComponent />
    </div>
  );
};

export default Dashboard;
