import React from "react";
import InputMask from "react-input-mask";

export const InputPhone = props => {
  const { input, meta, classis, mask } = props;
  return (
    <div className={classis}>
      <InputMask {...input} type="text" mask={mask} alwaysShowMask={true} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </div>
  );
};
