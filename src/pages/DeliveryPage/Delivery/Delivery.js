import React, { Component } from "react";
import TitleText from "../../../components/TitleText/TitleText";
import FormDeliveryContainer from "../../../containers/FormsContainers/FormDeliveryContainer";
import mod from "./Delivery.module.sass";

class Delivery extends Component {
  render() {
    return (
      <section className={mod.Delivery}>
        <div className="container">
          <TitleText
            title="Доставка по РБ"
            subtitle="Доставка по РБ рассчитывается индивидуально в зависимости от объема
            заказанной продукции"
            size="big"
          />
          <FormDeliveryContainer />
        </div>
      </section>
    );
  }
}

export default Delivery;
