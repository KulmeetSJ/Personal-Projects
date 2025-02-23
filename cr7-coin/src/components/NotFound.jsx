import notFound from "../assets/images/404-not-found.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" flex flex-col gap-4 items-center justify-center mt-16 md:mt-24">
      <img
        draggable="false"
        className="sm:w-1/3 h-full"
        src={notFound}
        alt="Page Not Found"
      />
      <Link
        to="/"
        className="px-4 py-2 bg-primary-blue rounded-sm uppercase shadow lg:hover:shadow-lg text-white"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
