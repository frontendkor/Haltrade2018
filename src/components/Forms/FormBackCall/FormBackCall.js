import React from "react";
import Button from "../../Button/Button";
import mod from "./FormBackCall.module.sass";

const FormBackCall = props => {
  const { openModal } = props;
  const onClick = () => {
    let content = "FormBackCall";
    openModal(true, content);
  };
  return (
    <React.Fragment>
      <a href="tel:+375255383464" className={mod.link}>
        +375 255 383 464
      </a>
      <Button
        onClick={onClick.bind(this)}
        name="Заказать звонок"
        button="true"
        classis={mod.Btn}
      />
    </React.Fragment>
  );
};

export default FormBackCall;
