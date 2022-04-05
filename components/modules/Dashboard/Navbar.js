import Image from "next/image";
import logo from "../../../public/assets/images/logo.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.loggedReducer);
  return (
    <div className="flex items-center justify-between py-5">
      <Image src={logo} alt="Afrik Web Logo" unoptimized />
      <div className="flex items-center space-x-4">
        <div>
          <IoMdNotificationsOutline className="text-5xl" />
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
