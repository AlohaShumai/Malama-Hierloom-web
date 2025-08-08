import React from "react";

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container navbar">
        <div className="brand">
          Malama Heirloom
        </div>
        <nav>
          <a href="#about">About</a>
          &nbsp; | &nbsp;
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
