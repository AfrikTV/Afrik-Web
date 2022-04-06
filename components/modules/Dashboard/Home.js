import React from "react";
import { useSelector } from "react-redux";
import Card from "../../elements/Dashboard/Card";

const Home = () => {
  const { user } = useSelector((state) => state.loggedReducer);
  return (
    <section className="">
      {/* Plan */}
      <div>
        <h1 className="text-4xl font-bold text-left lg:text-left">{`Hi, ${user.name}`}</h1>
        {/* Cards */}
        <div className="mt-5 sm:mt-10 flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-5">
          {/* #07092C #4C75F2 */}
          {/* #492406 #D9B191 */}
          <Card
            plan={"Kids"}
            price={2500}
            cardBg={"#07092C"}
            wavyBg={"#4C75F2"}
          />
          <Card
            plan={"Kids"}
            price={2500}
            cardBg={"#492406"}
            wavyBg={"#D9B191"}
          />
        </div>

        {/* Premium */}
        <div>
          <h1 className="text-xl mt-5 lg:mt-10 font-bold text-left lg:text-left">
            Premium
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
