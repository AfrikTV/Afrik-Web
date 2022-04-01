import React from "react";

const Header = () => {
  return (
    <header className="bg-red-300">
      <div className="logo"></div>

      <nav>
        <ol className="flex font-">
          <li>About</li>

          <li>Features</li>

          <li>FAQ</li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
