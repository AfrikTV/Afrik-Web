import React from "react";
import Image from "next/image";
import Logo from "../../../public/AFRIK TV logo.png";
import Button from "../../elements/Button";
const Header = () => {
  return (
    <header className="= flex items-center justify-between p-5">
      <div className="logo">
        <Image src={Logo} alt="AFRIK TV logo" unoptimized />
      </div>

      <nav>
        <ol className="flex font-semibold text-primary space-x-16">
          <li className="text-[22px] cursor-pointer">About</li>

          <li className="text-[22px] cursor-pointer">Features</li>

          <li className="text-[22px] cursor-pointer">FAQ</li>
        </ol>
      </nav>

      <Button>Sign in</Button>
    </header>
  );
};

export default Header;
