import React, { Component } from "react";
import Button from "../../../../components/Button/Button";
import mod from "./BanerContent.module.sass";

class BanerContent extends Component {
  render() {
    return (
      <div className={mod.BanerContent}>
        <h2 className={mod.title}>Поставки вкусного мяса птицы халяль</h2>
        <div className={mod.decorLine} />
        <p className={mod.text}>
          Напрямую с фабрики с доставкой к Вам в магазин, ресторан или
          производство
        </p>
        <Button
          name="Скачать прайс-лист"
          link="true"
          href="http://localhost:3000/data/catalog/priceBelHalTraid.docx"
          download="true"
          classis={mod.Btn}
        />
      </div>
    );
  }
}

export default BanerContent;
