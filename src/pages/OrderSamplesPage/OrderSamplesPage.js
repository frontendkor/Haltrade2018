import React, { Component } from "react";
import FormOrderSamplesContainer from "../../containers/FormsContainers/FormOrderSamplesContainer";
import ProductDescription from "../AboutUsPage/ProductDescription/ProductDescription";
import mod from "./OrderSamplesPage.module.sass";

class OrderSamplesPage extends Component {
  render() {
    return (
      <React.Fragment>
        <section className={mod.OrderSamples}>
          <div className="container">
            <div className={mod.OrderSamplesBg}>
              <FormOrderSamplesContainer />
            </div>
          </div>
        </section>
        <section className={mod.OrderSamplesPageProductDescription}>
          <div className="container">
            <ProductDescription />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default OrderSamplesPage;
