import Image from "next/image";
import logo from "../../../public/assets/images/logo.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.loggedReducer);
  return (
    <div className="flex items-center justify-between py-5">
      <Image
        className="cursor-pointer"
        src={logo}
        alt="Afrik Web Logo"
        unoptimized
      />
      <div className="flex items-center space-x-4 z-10">
        <div className="relative cursor-pointer group">
          <div className="absolute right-0 top-0 bg-red-500 w-5 h-5 flex items-center justify-center text-white font-bold rounded-full animate-pulse">
            8
          </div>
          <IoMdNotificationsOutline className="text-5xl" />
          <div className="bg-transparent w-12 h-2 absolute top-12 right-0 -z-[1] hidden hover:inline-flex group-hover:inline-flex"></div>
          <div className="w-56 h-72 bg-white border-2 absolute top-14 right-0 rounded-lg hidden hover:flex group-hover:flex">
            <div>one</div>
          </div>
        </div>
        <div className="">
          <Image
            className="rounded-lg"
            src={user.avatar}
            alt={"profile-pic"}
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
