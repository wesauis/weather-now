import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Weather Now</title>
      </Head>
      <h1
        className="p-4 text-center 
                   text-[150px] text-teal-500
                   font-bold"
      >
        Weather Now
      </h1>
    </Layout>
  );
};

export default Home;
