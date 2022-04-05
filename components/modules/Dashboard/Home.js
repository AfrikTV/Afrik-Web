import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.loggedReducer);
  return (
    <div className="">
      {/* User */}
      <h1>{`Hi, ${user.name}`}</h1>
      {/* Plan */}
      <div>
        {/* Cards */}
        <h1>Cards</h1>
      </div>
    </div>
  );
};

export default Home;
