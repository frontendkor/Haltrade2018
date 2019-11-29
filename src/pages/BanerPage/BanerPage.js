import React, { Component } from "react";
import BanerContainer from "./Baner/Baner";
import FactsBox from "../../components/FactsBox/FactsBox";

const FactsBoxData = [
  {
    id: 1,
    text: "Только ручной убой птицы"
  },
  {
    id: 2,
    text: "Не усыхает при термо обработке"
  },
  {
    id: 3,
    text: "Без потерь в весе при разморозке"
  }
];

class BanerPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <BanerContainer />
            <FactsBox data={FactsBoxData} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BanerPage;
