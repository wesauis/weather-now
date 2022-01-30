import type { NextPage } from "next";
import Head from "next/head";

import Wind from "../submodules/weather-icons/production/fill/svg/wind-alert.svg";

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
