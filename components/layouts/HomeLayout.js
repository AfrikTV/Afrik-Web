// layout in react for the Home page of the website
import faker from "@faker-js/faker";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import signin from "../../store/actions/isLogged";
import Footer from "../modules/Footer";
import HomeNavbar from "../modules/Header/HomeNav";

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
        <><div className="mx-auto">
            {/* Navbar */}
            <HomeNavbar img={user.avatar} />

            {/* Content */}
            <div className="flex space-x-20">

                {/* Main */}
                <div className="">{children}</div>
            </div>

        </div><Footer /></>
    );
};

export default Layout;
