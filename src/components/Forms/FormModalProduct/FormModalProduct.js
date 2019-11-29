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
import mod from "./FormModalProduct.module.sass";

let FormModalProduct = props => {
  const {
    img,
    title,
    weight,
    weightPacking,
    storageTemperature,
    shelfLife,
    packaging
  } = props.data;
  const { handleSubmit, openModal } = props;
  return (
    <div className={mod.FormModalProduct}>
      <ModalCloseBtn openModal={openModal} />
      <div className={mod.img}>
        <img src={img} alt="img" />
      </div>
      <div className={mod.content}>
        <div className={mod.description}>
          <h2>{title}</h2>
          <div className={mod.decorLine} />
          <p>
            Вес ед, кг: <span>{weight}</span>
          </p>
          <p>
            Вес коробки: <span>{weightPacking}</span>
          </p>
          <p>
            Температура хранения: <span>{storageTemperature}</span>
          </p>
          <p>
            Срок годности: <span>{shelfLife}</span>
          </p>
          <p>
            Упаковка: <span>{packaging}</span>
          </p>
          <form onSubmit={handleSubmit} className={mod.form}>
            <h2>Попробуй бесплатно</h2>
            <p>Закажите пробники товара с бесплатной доставкой до Вас</p>
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
            <Button
              button={true}
              type="submit"
              name="Отправить"
              classis={mod.Btn}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

FormModalProduct = reduxForm({
  form: "FormProduct"
})(FormModalProduct);

export default FormModalProduct;
