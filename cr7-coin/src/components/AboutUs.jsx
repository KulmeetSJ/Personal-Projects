import React from "react";
// import aboutUs from "../assets/about-us.png";
import cr7 from "../assets/images/cr7-text.jpg";

const AboutUs = () => {
  return (
    <div className="md:px-6 px-4 text-white" id="about">
      <div className="2xl:mt-10 flex lg:flex-row justify-between flex-col lg:gap-10 gap-12 w-full">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <p className="text-lg md:text-xl leading-3 text-[#7856F7] font-semibold cursor-pointer mb-4">
            About Us
          </p>
          <h2 className="font-bold text-3xl md:text-5xl lg:leading-9 leading-7 mb-8 md:mb-14 ">
            CR7 coin
          </h2>
          <p className=" text-lg leading-6 text-primary-red/90 mt-4 font-robotoSlab400">
            CR7 Coin is a revolutionary meme coin built on the Solana
            blockchain, aimed at bringing the thrill of football and the allure
            of cryptocurrency together. Leveraging the popularity of Cristiano
            Ronaldo, one of the most celebrated footballers of all time, CR7
            Coin aims to create a vibrant community of fans and crypto
            enthusiasts.
          </p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2">
          <img className="lg:block hidden w-1/2" src={cr7} alt="cr7 coin" />
          <img
            className="lg:hidden sm:block hidden w-full h-3/4"
            src={cr7}
            alt="cr7 coin"
          />
          <img className="sm:hidden block w-full" src={cr7} alt="cr7 coin" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
