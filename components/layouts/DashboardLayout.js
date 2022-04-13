// layout in react for the Dashboard page of the website
import Navbar from "../modules/Dashboard/Navbar";
import Sidebar from "../modules/Dashboard/Sidebar";
import faker from "@faker-js/faker";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import signin from "../../store/actions/isLogged";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.loggedReducer);

  useEffect(() => {
    const getUser = async () => {
      const firstName = await faker.name.firstName();
      const avatar = await faker.image.avatar();

      dispatch(signin(firstName, avatar));
    };

    getUser();
  }, [dispatch]);
  return (
    <div className="h-screen max-w-[90rem] mx-auto px-10">
      {/* Navbar */}
      <Navbar img={user.avatar} />

      {/* Content */}
      <div className="flex space-x-20">
        {/* Sidebar */}
        <Sidebar />
        {/* Main */}
        <div className="dashboard-container">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
