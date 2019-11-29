import React, { Component } from "react";

import LinksData from "./Links/LinksData";
import Links from "./Links/Links";
import mod from "./Nav.module.sass";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: ""
    };
  }
  clickLink = e => {
    const { showCase, products } = this.props;
    e.preventDefault();
    let thisId = e.target.id;
    if (thisId !== this.state.activeLink) {
      this.setState({ activeLink: thisId });
    }
    let newData = products.filter(item => {
      return item.hasOwnProperty(thisId);
    });
    showCase(newData);
  };
  addClassActiveLink = id => {
    let { activeLink } = this.state;
    return activeLink === id ? `${mod.linkActive}` : "";
  };
  render() {
    const { clickLink, addClassActiveLink } = this;
    return (
      <nav className={`${mod.nav}`}>
        <Links
          data={LinksData}
          clickLink={clickLink}
          addClassActiveLink={addClassActiveLink}
        />
      </nav>
    );
  }
}

export default Nav;
