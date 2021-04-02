import React from "react";
import Logo from "../Logo";
import ButtonSecondary from "../Button/secondary";
import ButtonOutline from "../Button/outline";

const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        padding: "16px 10%",
        backgroundColor: "var(--primary-color)",
        zIndex: 1,
        flexDirection: "row",
      }}
    >
      <a href="/">
        <Logo />
      </a>
    </header>
  );
};

export default Header;
