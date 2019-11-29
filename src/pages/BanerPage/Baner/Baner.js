import React, { Component } from "react";
import BanerContent from "./BanerContent/BanerContent";
import BanerImg from "./BanerImg/BanerImg";
import mod from "./Baner.module.sass";

class BanerContainer extends Component {
  render() {
    return (
      <section className={mod.Baner}>
        <BanerContent />
        <BanerImg />
      </section>
    );
  }
}

export default BanerContainer;
