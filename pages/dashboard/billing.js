import Head from "next/head";
import Billing from "../../components/modules/Dashboard/Billing";

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Afrik Web | Dashboard</title>
        <meta name="description" content="billing section afrik tv" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Billing />
    </div>
  );
};

export default Dashboard;
