import SidebarItem from "../../elements/Dashboard/SidebarItem";
import { RiHomeSmile2Fill, RiSettingsFill } from "react-icons/ri";
import { AiFillCreditCard } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  home,
  billing,
  activities,
  settings,
} from "../../../store/actions/section";
import Link from "next/link";


const Sidebar = () => {
  const currentSection = useSelector((state) => state.sectionReducer);
  const dispatch = useDispatch();

  const homeClick = () => {
    dispatch(home());
  };

  const billingClick = () => {
    dispatch(billing());
  };

  const activitiesClick = () => {
    dispatch(activities());
  };

  const settingsClick = () => {
    dispatch(settings());
  };

  return (
    <div className="flex flex-col items-center justify-center fixed bg-white h-[100vh] top-20 left-0 w-48 grid-rows-5 gap-5">
      <Link href={"/dashboard"} passHref>
        <SidebarItem
        
          onClick={homeClick}
          customStyle={`row-start-2 group ${
            currentSection === "home" ? "bg-gray-50" : ""
          }`}
          text="Home"
          textCustomStyle={`${
            currentSection === "home" ? "text-[#07092C]" : "text-gray-500"
          }`}
        >
          <RiHomeSmile2Fill
            className={`text-3xl group-hover:text-[#07092C] ${
              currentSection === "home" ? "text-[#07092C]" : "text-gray-500"
            }`}
          />
        </SidebarItem>
      </Link>

      <Link href={"/dashboard/billing"} passHref>
        <SidebarItem
          onClick={billingClick}
          customStyle={`row-start-2 group ${
            currentSection === "billing" ? "bg-gray-50" : ""
          }`}
          text="Billing"
          textCustomStyle={`${
            currentSection === "billing" ? "text-[#07092C]" : "text-gray-500"
          }`}
        >
          <AiFillCreditCard
            className={`text-3xl group-hover:text-[#07092C] ${
              currentSection === "billing" ? "text-[#07092C]" : "text-gray-500"
            }`}
          />
        </SidebarItem>
      </Link>

      <Link href={"/dashboard/activities"} passHref>
        <SidebarItem
          onClick={activitiesClick}
          customStyle={`row-start-2 group ${
            currentSection === "activities" ? "bg-gray-50" : ""
          }`}
          text="Activities"
          textCustomStyle={`${
            currentSection === "activities" ? "text-[#07092C]" : "text-gray-500"
          }`}
        >
          <FiActivity
            className={`text-3xl group-hover:text-[#07092C] ${
              currentSection === "activities"
                ? "text-[#07092C]"
                : "text-gray-500"
            }`}
          />
        </SidebarItem>
      </Link>

      <Link href={"/dashboard/settings"} passHref>
        <SidebarItem
          onClick={settingsClick}
          customStyle={`row-start-2 group ${
            currentSection === "settings" ? "bg-gray-50" : ""
          }`}
          text="Settings"
          textCustomStyle={`${
            currentSection === "settings" ? "text-[#07092C]" : "text-gray-500"
          }`}
        >
          <RiSettingsFill
            className={`text-3xl group-hover:text-[#07092C] ${
              currentSection === "settings" ? "text-[#07092C]" : "text-gray-500"
            }`}
          />
        </SidebarItem>
      </Link>
    </div>
  );
};

export default Sidebar;
