// eslint-disable-next-line
import Chart from "chart.js/auto";
import { useEffect } from "react";
import whitepaper from "../assets/images/whitepaper-2.png";
import { Pie } from "react-chartjs-2";
import logo from "../assets/images/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Stats = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const pieState = {
    labels: [
      "Presale",
      "Airdrop",
      "Team and Marketing",
      "Burning",
      "Public Supply",
    ],
    datasets: [
      {
        label: "Distribution of Tokens",
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF5733",
          "#FF5733",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF5733",
          "#FF5733",
        ],
        data: [29, 6, 20, 10, 35],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:gap-10 mt-20 sm:mt-10 px-8 w-full md:w-11/12 mx-auto ">
      <div className="absolute h-32 w-32 sm:w-52 sm:h-52 mt-42 md:mt-96 block object-cover right-1 -rotate-90    -translate-x-[50%] translate-y-[0%]">
        <img src={logo} alt="CR7" className="object-cover" />
      </div>
      <div
        className="text-2xl md:text-3xl lg:text-5xl text-left"
        data-aos="fade-up"
      >
        {" "}
        Total Supply: 1 billion
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-32 ">
        <a
          href="https://ronaldo7sol.com/whitepaper.pdf"
          target="_blank"
          rel="noreferrer"
          data-aos="flip-left"
        >
          <img
            src={whitepaper}
            alt="Whitepaper"
            className="h-52 w-52 sm:h-96 sm:w-full object-cover"
          />
        </a>
        <div className="rounded-xl shadow-lg p-4 text-center">
          <Pie data={pieState} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
