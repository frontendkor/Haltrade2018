import React from "react";
import { NavLink } from "react-router-dom";
import NavLinksData from "./navLinksData";
import mod from "./NavLinks.module.sass";

const NavLinks = props => {
  const { showNav } = props;
  const renderLinks = data => {
    let Links;
    if (data.length) {
      Links = data.map(({ id, to, exact, title }) => {
        return (
          <div
            key={id}
            className={mod.navItem}
            onClick={function() {
              showNavAction();
            }}
          >
            <NavLink to={to} exact={exact}>
              {title}
            </NavLink>
          </div>
        );
      });
    }
    return Links;
  };
  const showNavAction = () => {
    window.scrollTo({ top: 0 });
    if (window.innerWidth < 980) {
      showNav(false);
    }
  };
  return <nav className={mod.nav}>{renderLinks(NavLinksData)}</nav>;
};

export default NavLinks;
