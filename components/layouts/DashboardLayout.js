// layout in react for the Dashboard page of the website
import Navbar from "../modules/Dashboard/Navbar";
import Sidebar from "../modules/Dashboard/Sidebar";
import faker from "@faker-js/faker";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import signin from "../../store/actions/isLogged";
import sidebarReducer from "../../store/reducers/sidebar";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.loggedReducer);
  const isSidebar = useSelector((state) => state.sidebarReducer);

  useEffect(() => {
    const getUser = async () => {
      const firstName = await faker.name.firstName();
      const avatar = await faker.image.avatar();
      dispatch(signin(firstName, avatar));
    };

    getUser();
  }, [dispatch]);
  return (
    <div className="h-screen max-w-[90rem] mx-auto ">
      {/* Navbar */}
      <Navbar img={user.avatar} />

      {/* Content */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Main */}
        <div className={`${isSidebar === 'open' ? "overflow-hidden before:bg-[rgba(0,0,0,0.36458333333333337)] z-[49] before:fixed before:w-[100vw] before:h-[100vh] before:top-0" : "before:fixed  before:w-[100vw] before:bg-blue-500"} "w-full pb-[1em] relative ml-0 md:ml-[214px] bg-white mt-[6em]"}`}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
