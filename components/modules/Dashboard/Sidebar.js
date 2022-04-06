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
    <div className="grid grid-rows-5 gap-5">
      <SidebarItem
        href={"/dashboard"}
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
          className={`text-4xl group-hover:text-[#07092C] ${
            currentSection === "home" ? "text-[#07092C]" : "text-gray-500"
          }`}
        />
      </SidebarItem>

      <SidebarItem
        href={"/dashboard/billing"}
        onClick={billingClick}
        customStyle={`row-start-3 group ${
          currentSection === "billing" ? "bg-gray-50" : ""
        }`}
        text="Billing"
        textCustomStyle={`${
          currentSection === "billing" ? "text-[#07092C]" : "text-gray-500"
        }`}
      >
        <AiFillCreditCard
          className={`text-4xl group-hover:text-[#07092C] ${
            currentSection === "billing" ? "text-[#07092C]" : "text-gray-500"
          }`}
        />
      </SidebarItem>

      <SidebarItem
        href={"/dashboard/activities"}
        onClick={activitiesClick}
        customStyle={`row-start-4 group ${
          currentSection === "activities" ? "bg-gray-50" : ""
        }`}
        text="Activities"
        textCustomStyle={`${
          currentSection === "activities" ? "text-[#07092C]" : "text-gray-500"
        }`}
      >
        <FiActivity
          className={`text-4xl group-hover:text-[#07092C] ${
            currentSection === "activities" ? "text-[#07092C]" : "text-gray-500"
          }`}
        />
      </SidebarItem>

      <SidebarItem
        href={"/dashboard/settings"}
        onClick={settingsClick}
        customStyle={`row-start-5 group ${
          currentSection === "settings" ? "bg-gray-50" : ""
        }`}
        text="Settings"
        textCustomStyle={`${
          currentSection === "settings" ? "text-[#07092C]" : "text-gray-500"
        }`}
      >
        <RiSettingsFill
          className={`text-4xl group-hover:text-[#07092C] ${
            currentSection === "settings" ? "text-[#07092C]" : "text-gray-500"
          }`}
        />
      </SidebarItem>
    </div>
  );
};

export default Sidebar;
