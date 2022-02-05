import { NextPage } from "next";
import Weather from "../@types/forecast";
import { PartlyCloudyDayFog } from "./weather-icons";

interface SummaryProps {
  location: Weather.Location;
  temps: {
    temp: number;
    min: number;
    max: number;
  };
}

const Summary: NextPage<SummaryProps> = ({ location, temps }) => (
  <div
    className="
        h-screen flex flex-col justify-center items-center
        antialiased
        bg-gradient-to-br from-pink-900 to-black"
  >
    <section>
      <PartlyCloudyDayFog className="block text-[9rem] m-auto" />
    </section>

    <section className="my-4">
      <h1 className="text-4xl text-center text-white">{location.name}</h1>
      <h1 className="text-xs text-center text-white">{location.region}</h1>
    </section>

    <section className="my-3 text-white flex">
      <div className="h-fit text-7xl">{temps.temp.toFixed(0)}</div>
      <div>
        <div className="text-2xl">°C</div>
        <div className="text-sm">↑ {temps.max.toFixed(0)}</div>
        <div className="text-sm">↓ {temps.min.toFixed(0)}</div>
      </div>
    </section>
  </div>
);

export default Summary;
