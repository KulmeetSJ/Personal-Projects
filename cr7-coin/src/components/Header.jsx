import { useState, useRef, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import telegram from "../assets/images/telegram.svg";
import whitepaper from "../assets/images/whitepaper.png";
import logo from "../assets/images/logo.png";
import RouteRoundedIcon from "@mui/icons-material/RouteRounded";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuButtonRef.current && menuButtonRef.current.contains(e.target)) {
        return;
      }
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="fixed w-full top-0 flex items-center justify-between py-2 sm:py-4 px-4 sm:px-10 bg-black z-20">
      <Link
        to="/"
        className="flex items-center gap-4 h-10 w-10 sm:h-16 sm:w-16 "
      >
        <img src={logo} alt="Logo" className="object-contain " />
      </Link>
      <div className="flex items-center justify-between gap-4">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-tr from-[#E42518]  via-[#ED5B51]  to-[#FAF9F6]  text-2xl sm:text-5xl font-robotoSlab600 text-center">
          CR-7 (ON SOL)
        </h1>
      </div>
      <div className="flex items-center gap-4 relative">
        <button onClick={handleDropdown} ref={menuButtonRef}>
          <MenuIcon
            className="h-14 w-14 cursor-pointer text-white"
            sx={{
              fontSize: window.innerWidth <= 640 ? "1.5rem" : "2.5rem",
              cursor: "pointer",
              color: "white",
            }}
          />
        </button>
        {showDropdown && (
          <div
            className="absolute top-full right-0 mt-2 w-[50vw] md:w-[20vw] bg-gray-800/60 text-white  font-robotoSlab400 shadow-xl rounded-xl z-10 "
            ref={menuRef}
          >
            <ul className="flex flex-col gap-4 items-start justify-start p-4 w-full ">
              <li className="text-lg sm:text-xl border-b w-full text-center  pb-2 ">
                <a
                  href="https://t.me/ronaldo7sol"
                  target="_blank"
                  rel="noreferrer"
                  className=" cursor-pointer flex items-center gap-2"
                >
                  <img
                    src={telegram}
                    alt="Tele"
                    className="h-8 w-8 object-contain"
                  />{" "}
                  Telegram
                </a>
              </li>

              <li className="text-lg sm:text-xl border-b w-full  text-center  pb-2">
                <a
                  href="https://twhitepaper.com"
                  target="_blank"
                  rel="noreferrer"
                  className=" cursor-pointer flex items-center gap-2"
                >
                  <img
                    src={whitepaper}
                    alt="White"
                    className="h-8 w-8 object-contain"
                  />{" "}
                  White Paper
                </a>
              </li>

              <HashLink to="/#roadmap" smooth>
                <li className="text-lg sm:text-xl w-full text-center flex items-center gap-4">
                  <RouteRoundedIcon className="h-8 w-8 object-contain text-white" />{" "}
                  Road Map
                </li>
              </HashLink>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
