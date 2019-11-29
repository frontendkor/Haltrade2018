import React from "react";
import {
  requiredInput,
  correctInputPhone,
  correctInputNameLength
} from "../validate";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Inputs/Input";
import { InputPhone } from "../Inputs/InputPhone";
import Button from "../../Button/Button";
import ModalCloseBtn from "../../Modal/ModalCloseBtn";
import mod from "./FormModal.module.sass";

let FormModal = props => {
  const { handleSubmit, openModal } = props;
  return (
    <form onSubmit={handleSubmit} className={mod.form}>
      <ModalCloseBtn openModal={openModal} />
      <h2>Оставьте заявку</h2>
      <p>и мы свяжемся с Вами в течении 5 минут</p>
      <Field
        name="name"
        type="text"
        component={Input}
        placeholder="Введите ваше имя"
        classis={mod.name}
        validate={[requiredInput, correctInputNameLength]}
      />
      <Field
        name="phone"
        type="text"
        component={InputPhone}
        mask="+ (375) 999 999 999"
        validate={[requiredInput, correctInputPhone]}
        classis={mod.phone}
      />
      <Button button={true} type="submit" name="Отправить" classis={mod.Btn} />
    </form>
  );
};

FormModal = reduxForm({
  form: "FormModal"
})(FormModal);

export default FormModal;
