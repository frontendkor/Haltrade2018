import React from "react";
import Button from "../../Button/Button";
import mod from "./FormFreeShipping.module.sass";
import ic from "./ic.png";

const FormFreeShipping = props => {
  const { openModal } = props;
  const onClick = () => {
    openModal(true, "FormFreeShipping");
    console.log("hhhh");
  };
  return (
    <div className={mod.FormFreeShipping}>
      <div className={mod.ic}>
        <img src={ic} alt="ic" />
      </div>
      <div className={mod.content}>
        <h2 className={mod.title}>Бесплатная доставка по Минску и МО</h2>
        <p className={mod.subtitle}>При условии минимального заказа</p>
        <Button
          button={true}
          type="button"
          name="Оформить заказ с доставкой"
          classis={mod.Btn}
          onClick={onClick.bind(this)}
        />
      </div>
    </div>
  );
};

export default FormFreeShipping;
