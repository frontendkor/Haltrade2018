import React, { Component } from "react";
import HeaderContent from "./HeaderContent/HeaderContent";
import NavContainer from "../../containers/Nav/NavContainer";
import "./Header.sass";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: false
    };
  }
  stickyHeader() {
    window.onscroll = () => {
      let scrollTop = window.scrollY;
      let windowW = window.innerWidth;
      const bigScreen = () => {
        if (scrollTop > 85) {
          this.setState({ top: true });
        }
        if (scrollTop <= 85) {
          this.setState({ top: false });
        }
      };
      const minScreen = () => {
        if (scrollTop > 77) {
          this.setState({ top: true });
        }
        if (scrollTop <= 77) {
          this.setState({ top: false });
        }
      };
      windowW >= 1120 && bigScreen();
      if (windowW < 1120 && windowW > 980) {
        minScreen();
      }
    };
  }
  componentDidMount() {
    this.stickyHeader();
  }
  render() {
    let { top } = this.state;
    return (
      <header className={top ? "sticky" : ""}>
        <HeaderContent />
        <NavContainer />
      </header>
    );
  }
}

export default Header;
