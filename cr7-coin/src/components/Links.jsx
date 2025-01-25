import { useEffect } from "react";
import telegram from "../assets/images/telegram.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import dex from "../assets/images/dex.svg";
import cr7 from "../assets/images/cr7-2.jpg";
import logo from "../assets/images/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Links = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="absolute h-32 w-32 sm:w-52 sm:h-52 block object-cover left-0 mt-44 sm:mt-40 rotate-90 translate-x-[50%] translate-y-[80%]">
        <img src={logo} alt="CR7" className="object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-14 ">
        <div
          className="flex flex-row items-center gap-6 sm:gap-10 mx-2"
          data-aos="fade-right"
        >
          <a
            href="https://t.me/ronaldo7sol"
            target="_blank"
            rel="noreferrer"
            className="h-14 w-14 sm:h-24 sm:w-24 p-2 sm:p-4 rounded-full bordex-x-1 border-y-2 border-dashed border-gray-50  flex items-center hover:border-dotted transition-all duration-500 ease-in-out hover:scale-110 "
          >
            <img src={telegram} alt="Telegram" className="object-contain" />
          </a>

          <a
            href="https://twitter.com/ronaldo7sol"
            target="_blank"
            rel="noreferrer"
            className="h-14 w-14 sm:h-24 sm:w-24 p-2 sm:p-4 rounded-full bordex-x-1 border-y-2 border-dashed border-gray-50  flex items-center hover:border-dotted transition-all duration-500 ease-in-out hover:scale-110"
          >
            <img src={twitter} alt="Twitter" className="object-contain" />
          </a>
          <a
            href="https://www.instagram.com/ronaldo7sol/"
            target="_blank"
            rel="noreferrer"
            className="h-14 w-14 sm:h-24 sm:w-24 p-2 sm:p-4 rounded-full bordex-x-1 border-y-2 border-dashed border-gray-50 flex flex-col items-center hover:border-dotted transition-all duration-500 ease-in-out hover:scale-110"
          >
            <img src={instagram} alt="Instagram" className="object-contain" />
          </a>
          <a
            href="https://dex.ronaldo7sol.com/"
            target="_blank"
            rel="noreferrer"
            className="h-14 w-14 sm:h-24 sm:w-24 p-2 sm:p-4 rounded-full bordex-x-1 border-y-2 border-dashed border-gray-50 flex items-center hover:border-dotted transition-all duration-500 ease-in-out hover:scale-110"
          >
            <img src={dex} alt="Dex" className="object-contain" />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row  items-center justify-around ">
          <div
            className="hidden sm:block text-2xl lg:text-4xl font-robotoSlab400 text-center uppercase tracking-wide leading-10"
            data-aos="fade-up-right"
          >
            It's Ronaldo world
            <br /> we live in
          </div>
          <div
            className="block sm:hidden text-xl  font-robotoSlab400 text-center uppercase tracking-wide leading-10"
            data-aos="fade-up-right"
          >
            It's Ronaldo world we live in
          </div>
          <img
            src={cr7}
            alt="CR7"
            className="h-40 w-40 sm:h-72 sm:w-96 object-contain"
            data-aos="fade-up-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Links;
