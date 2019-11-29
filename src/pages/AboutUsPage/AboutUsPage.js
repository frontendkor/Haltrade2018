/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import ProductDescription from "./ProductDescription/ProductDescription";
import FactsBox from "../../components/FactsBox/FactsBox";
import DownLoadСatalog from "./DownLoadСatalog/DownLoadСatalog";
import AboutUs from "./AboutUs/AboutUs";
import Quality from "./Quality/Quality";

const FactsBoxData = [
  {
    id: 4,
    text: "Откорм птицы натуральными кормами"
  },
  {
    id: 5,
    text: "Без использования ГМО и гормонов роста"
  },
  {
    id: 6,
    text: "Не содержит вредных веществ"
  }
];

class AboutUsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <ProductDescription />
          <FactsBox data={FactsBoxData} />
          <DownLoadСatalog />
        </div>
        <AboutUs />
        <Quality />
      </React.Fragment>
    );
  }
}

export default AboutUsPage;
