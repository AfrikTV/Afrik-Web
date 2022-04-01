import React from "react";
import Image from "next/image";
import Logo from "../../../public/AFRIK TV logo.png";

const Header = () => {
  return (
    <header className="bg-red-300 flex items-center p-5-">
      <div className="logo">
        <Image src={Logo} alt="AFRIK TV logo" unoptimized />
      </div>

      <nav>
        <ol className="flex font-semibold text-primary">
          <li className="text-[22px]">About</li>

          <li className="text-[22px]">Features</li>

          <li className="text-[22px]">FAQ</li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
