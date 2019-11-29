import React from "react";
import {
  requiredInput,
  correctSelect,
  correctInputNameLength,
  correctInputPhone
} from "../validate";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Inputs/Input";
import { InputSelect } from "../Inputs/InputSelect";
import { InputPhone } from "../Inputs/InputPhone";
import Button from "../../Button/Button";
import mod from "./FormOrderSamples.module.sass";

const optionsProduct = [
  {
    title: "Тушки",
    id: "1"
  },
  {
    title: "Для переработки",
    id: "2"
  },
  {
    title: "Разделка ЦБ лоток",
    id: "3"
  },
  {
    title: "Разделка ЦБ монолит",
    id: "4"
  },
  {
    title: "Субпродукты",
    id: "5"
  }
];

let FormOrderSamples = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className={mod.form}>
      <h2>Заявка на проработку продукции</h2>
      <h4>
        Оформите заявку на бесплатную проработку продукции и убедитесь в ее
        качестве
      </h4>
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
      <Field
        name="product"
        size="1"
        options={optionsProduct}
        component={InputSelect}
        validate={[requiredInput, correctSelect]}
        classis={mod.select}
      />
      <Button button={true} type="submit" name="Отправить" classis={mod.Btn} />
    </form>
  );
};

FormOrderSamples = reduxForm({
  form: "FormOrderSamples"
})(FormOrderSamples);

export default FormOrderSamples;
