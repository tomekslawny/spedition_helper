import React from "react";
import Fire from "./Fire";
import Button from "@material-ui/core/Button";
import logo from "../logo.png";

const NavBarTop = () => {
  const handleLogout = () => {
    Fire.auth().signOut();
  };
  return (
    <nav>
      <img src={logo} alt="Logo" className="logoMulticco" />
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Wyloguj
      </Button>
    </nav>
  );
};

export default NavBarTop;
