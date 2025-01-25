import cr7 from "../assets/images/cr7.jpg";
import telegram from "../assets/images/telegram.svg";

const Footer = () => {
  return (
    <div className="w-[94%] mx-auto flex flex-col items-center px-4 sm:px-14">
      <div className="flex flex-row justify-between items-center w-full">
        <a href="/" className="h-14 w-14 sm:h-24 sm:w-24">
          <img src={cr7} alt="CR7" className=" object-contain" />
        </a>
        <a
          href="https://t.me/ronaldo7sol"
          target="_blank"
          rel="noreferrer"
          className="h-14 w-14 sm:h-24 sm:w-24 p-2 sm:p-4 rounded-full border border-dashed border-gray-50 flex items-center hover:border-dotted transition-all duration-500 ease-in-out hover:scale-110"
        >
          <img src={telegram} alt="Telegram" className="object-contain" />
        </a>
      </div>
      <div className="text-center p-2 sm:p-4">
        <p className="text-lg text-white">
          © CR7-Coin 2024 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
