import React from "react";
import mod from "./FactsBox.module.sass";
import ic1 from "./ic/ic1.png";
import ic2 from "./ic/ic2.png";
import ic3 from "./ic/ic3.png";
import ic4 from "./ic/ic4.png";
import ic5 from "./ic/ic5.png";
import ic6 from "./ic/ic6.png";
import ic7 from "./ic/ic7.png";
import ic8 from "./ic/ic8.png";
import ic9 from "./ic/ic9.png";
import ic10 from "./ic/ic10.png";

const FactsBoxItem = props => {
  const { text, id } = props;
  const icArr = [ic1, ic2, ic3, ic4, ic5, ic6, ic7, ic8, ic9, ic10];
  return (
    <div className={mod.item}>
      <img src={icArr[id - 1]} alt="icon" />
      <p>{text}</p>
    </div>
  );
};

const FactsBox = props => {
  const { data } = props;
  const renderFacts = data => {
    let facts;
    if (data.length) {
      facts = data.map(({ id, text }) => {
        return <FactsBoxItem key={id} text={text} id={id} />;
      });
    }
    return facts;
  };
  return <section className={mod.FactsBox}>{renderFacts(data)}</section>;
};

export default FactsBox;
