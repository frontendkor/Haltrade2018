import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import NavLinks from "./NavLinks/NavLinks";
import mod from "./Nav.module.sass";
import "./NavAnimation.sass";

class Nav extends Component {
  optimizedResize() {
    const { showNav } = this.props;
    const adapt = () => {
      window.innerWidth <= 980 ? showNav(false) : showNav(true);
    };
    let initialWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      let newWidth = window.innerWidth;
      if (newWidth !== initialWidth) {
        initialWidth = newWidth;
        adapt();
      }
    });
  }

  componentDidMount() {
    this.optimizedResize();
  }

  renderNav() {
    const { show } = this.props.show;
    const { showNav } = this.props;
    if (window.innerWidth <= 980) {
      return (
        <Transition in={show} timeout={10}>
          {state => {
            return (
              <div className={`toggle-elem ${state}Nav`}>
                <NavLinks showNav={showNav} />
              </div>
            );
          }}
        </Transition>
      );
    }
    return <NavLinks />;
  }

  render() {
    return <div className={mod.container}>{this.renderNav()}</div>;
  }
}

export default Nav;
