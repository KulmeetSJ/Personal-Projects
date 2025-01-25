import { useEffect } from "react";
import cr7 from "../assets/images/cr7.jpg";
import cr7kick from "../assets/images/cr7-kick.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center w-full"
      id="roadmap"
    >
      <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24 w-full ">
        <div className="flex flex-col items-center w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-4 sm:px-8">
          <p
            className="ml-2 text-2xl md:text-3xl lg:text-4xl font-robotoSlab700 text-center text-transparent bg-gradient-to-tr from-[#E42518] via-[#ED5B51] to-[#FAF9F6] bg-clip-text uppercase tracking-loose"
            data-aos="fade-right"
          >
            Roadmap
          </p>
          <a href="/" className=" mt-4 sm:mt-12 py-2 px-4">
            <img
              src={cr7}
              alt="CR7"
              className="h-32 w-32 object-contain"
              data-aos="fade-in"
            />
          </a>
        </div>
        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div className="border-2 border-yellow-555 absolute h-full border-[#1EAACE] rounded-sm right-1/2"></div>
              <div className="border-2 border-yellow-555 absolute h-full left-1/2 border-[#1EAACE] rounded-sm"></div>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div
                  className="order-1 w-5/12 px-1 py-4 text-right"
                  data-aos="fade-left"
                >
                  <h4 className="mb-3 font-robotoSlab600 text-lg md:text-2xl uppercase">
                    Creation of Token
                  </h4>
                  <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 font-robotoSlab400 ">
                    Creation of social media handles
                    <br />
                    Collab with influencers
                    <br />
                    Presale of CR7 token
                  </p>
                </div>
              </div>
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div
                  className="order-1  w-5/12 px-1 py-4 text-left"
                  data-aos="fade-right"
                >
                  <h4 className="mb-3 font-bold text-lg md:text-2xl uppercase">
                    launch of token
                  </h4>
                  <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    Vigrous marketing
                    <br />
                    Airdrops and giveaway for holders
                    <br />
                    Reach 100k$ market cap
                  </p>
                </div>
              </div>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div
                  className="order-1 w-5/12 px-1 py-4 text-right"
                  data-aos="fade-left"
                >
                  <h4 className="mb-3 font-bold text-lg md:text-2xl uppercase">
                    reach 250k market cap
                  </h4>
                  <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    Giveaway of ronaldo signed jersey and football Strengthen
                    the community
                  </p>
                </div>
              </div>
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div
                  className="order-1  w-5/12 px-1 py-4"
                  data-aos="fade-right"
                >
                  <h4 className="mb-3 font-bold text-lg md:text-2xl text-left uppercase">
                    reach 1 million market cap
                  </h4>
                  <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    Take the top holder to dubai to a match
                    <br />
                    Launch nft marketplace
                    <br />
                    Info about play to earn game
                  </p>
                </div>
              </div>
            </div>
            <img
              className="mx-auto mt-4 h-52 w-52 sm:h-96 sm:w-96 "
              src={cr7kick}
              alt="CR-7 Kick"
              data-aos="zoom-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
