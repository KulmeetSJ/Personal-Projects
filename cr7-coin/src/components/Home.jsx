import React from "react";
import Hero from "./Hero";
import Links from "./Links";
import Stats from "./Stats";
import Roadmap from "./Roadmap";

const Home = () => {
  return (
    <div className="sm:w-[94%]  sm:mx-auto flex flex-col gap-8 items-center justify-center mt-24 md:mt-28 font-robotoSlab400 ">
      <Hero />
      <Links />
      <Stats />
      <Roadmap />
    </div>
  );
};

export default Home;
