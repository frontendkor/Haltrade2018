import React, { Component } from "react";
import TitleText from "../../../components/TitleText/TitleText";
import Contacts from "../../../components/Contacts/Contacts";
import Location from "../../../components/Location/Location";
import mod from "./Pickup.module.sass";

class Pickup extends Component {
  render() {
    return (
      <section className={mod.Pickup}>
        <div className="container">
          <TitleText
            title="Самовывоз и доставка"
            subtitle="Отгрузка самовывозом осуществляется со склада распределительного
          центра"
            size="big"
          />
          <div className={mod.contacts}>
            <Contacts />
            <Location />
          </div>
        </div>
      </section>
    );
  }
}

export default Pickup;
