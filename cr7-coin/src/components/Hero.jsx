import { useEffect } from "react";
import { ca } from "../components/constants";
import logoImage from "../assets/images/logo.png";
import kick from "../assets/images/kick.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const isSmallScreen = window.innerWidth <= 640;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-center gap-14 ${
        isSmallScreen ? " bg-contain bg-right bg-no-repeat" : ""
      }`}
      style={{ backgroundImage: isSmallScreen ? `url(${logoImage})` : "none" }}
    >
      {!isSmallScreen && (
        <img
          src={logoImage}
          alt="Logo"
          className="hidden sm:block sm:object-contain h-96 w-full md:h-full md:-ml-14 md:-mt-20 "
          data-aos="zoom-in"
        />
      )}
      <div className="flex flex-col items-center justify-center gap-5 sm:gap-10 py-4 sm:py-8 ">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-aeonik500 text-center text-transparent bg-gradient-to-tr from-[#E42518]  via-[#ED5B51]  to-[#FAF9F6] bg-clip-text"
          data-aos="fade-down-left"
        >
          GOAT
        </h1>

        <h4
          className="text-sm md:text-lg lg:text-xl font-robotoSlab400 text-center text-wrap overflow-auto break-words "
          data-aos="fade-left"
        >
          CA:- {ca}
        </h4>
        <p
          className="text-base md:text-2xl lg:text-3xl font-robotoSlab400 text-center max-w-xl text-wrap overflow-hidden break-words"
          data-aos="fade-left"
        >
          Football is an art, those who hold this coin,
          <br />{" "}
          <span className="text-transparent bg-gradient-to-b from-[#FAF9F6]  to-[#E42518] bg-clip-text">
            {" "}
            appreciate its value{" "}
          </span>
        </p>
        <img
          src={kick}
          alt="Kick"
          className="h-52 w-52 sm:h-96 sm:w-96 hidden sm:block object-contain"
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
};

export default Hero;
