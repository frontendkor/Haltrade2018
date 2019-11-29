import React from "react";
import {
  requiredInput,
  correctSelect,
  correctInputEmail,
  correctInputPhone,
  requiredRange
} from "../validate";
import { Field, reduxForm } from "redux-form";
import Range from "../Inputs/InputRange";
import { Input } from "../Inputs/Input";
import { InputSelect } from "../Inputs/InputSelect";
import { InputPhone } from "../Inputs/InputPhone";
import Button from "../../Button/Button";
import mod from "./FormDelivery.module.sass";

const cityOptions = [
  {
    title: "Населёный пункт",
    id: "0"
  },
  {
    title: "Минск",
    id: "1"
  },
  {
    title: "Гомель",
    id: "2"
  },
  {
    title: "Могилёв",
    id: "3"
  },
  {
    title: "Витебск",
    id: "4"
  }
];

let FormDelivery = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className={mod.form}>
      <h2>Рассчитайте доставку продукции в ваш город</h2>
      <Field
        name="range"
        component={Range}
        min="0"
        max="10000"
        classis={mod.range}
        validate={[requiredRange]}
      />
      <Field
        name="city"
        size="1"
        options={cityOptions}
        component={InputSelect}
        validate={[requiredInput, correctSelect]}
        classis={mod.selectCity}
      />
      <Field
        name="email"
        type="email"
        component={Input}
        placeholder="Email"
        classis={mod.email}
        validate={[requiredInput, correctInputEmail]}
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
        name="Далее"
        classis={mod.submitBtn}
      />
    </form>
  );
};

FormDelivery = reduxForm({
  form: "DeliveryForm"
})(FormDelivery);

export default FormDelivery;
