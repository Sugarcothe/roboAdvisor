import { AccountBalance, AutoGraph } from "@mui/icons-material";
import React from "react";

const Navbar = () => {
  return (
    <div className="navContainer">
      <ul className="navbar">
        <li className="navLogo">
          <AutoGraph />
          <h1>roboAdvisor</h1>
        </li>
        <ul className="menuList">
          <li>Cash</li>
          <li>Bonds</li>
          <li>Automated Investing</li>
          <li>Stocks</li>
          <li>Learn</li>
        </ul>
        <li className="navBtnConainer">
          <button className="navBtn">Log in</button>
          <button className="navBtn1">Get Started</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
