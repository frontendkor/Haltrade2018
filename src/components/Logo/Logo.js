import React from "react";
import { Link } from "react-router-dom";
import mod from "./Logo.module.sass";
import logo from "./logo.png";

const Logo = props => {
  return (
    <Link to="/" className={mod.Logo}>
      <img src={logo} alt="logo" className={mod.LogoImg} />
    </Link>
  );
};

export default Logo;
