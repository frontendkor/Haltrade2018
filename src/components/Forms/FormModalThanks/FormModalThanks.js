import React from "react";
import ModalCloseBtn from "../../Modal/ModalCloseBtn";
import mod from "./FormModalThanks.module.sass";
import FormModalThanksImg from "./ThanksImg.png";

const FormModalThanks = props => {
  const { openModal } = props;
  return (
    <div className={mod.FormModalThanks}>
      <ModalCloseBtn openModal={openModal} />
      <h2>Спасибо</h2>
      <p>В ближайшее время наши менеджеры обязательно свяжутся с Вами</p>
      <div className={mod.FormModalThanksImgContainer}>
        <img
          src={FormModalThanksImg}
          alt="img"
          className={mod.FormModalThanksImg}
        />
      </div>
    </div>
  );
};

export default FormModalThanks;
