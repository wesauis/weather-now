import type { NextPage } from "next";
import Head from "next/head";
import { Wind } from "../components/weather-icons";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Weather Now</title>
        <Wind className="text-lg" />
      </Head>
    </div>
  );
};

export default Home;
