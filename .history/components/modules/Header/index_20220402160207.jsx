import React from "react";
import Image from "next/image";
import Logo from "../../../public/AFRIK TV logo.png";
import Button from "../../elements/Button";
import Link from 'next/link'
const Header = () => {
  return (
    <header className="= flex items-center justify-between p-10 max-w-[120rem] ">
      <div className="logo">
        <Image src={Logo} alt="AFRIK TV logo" unoptimized />
      </div>

      <nav className="lg:block hidden">
        <ol className="flex font-semibold text-primary space-x-16">
          <li className="text-[22px] cursor-pointer">About</li>

          <li className="text-[22px] cursor-pointer">Features</li>

          <li className="text-[22px] cursor-pointer">FAQ</li>
        </ol>
      </nav>

      <Button> <Link to={'/signin'} >Sign in </Link></header></Button>
    </header>
  );
};

export default Header;
