import React from "react";

export const Input = props => {
  const { input, type, placeholder, meta, classis } = props;
  return (
    <div className={classis}>
      <input {...input} type={type} placeholder={placeholder} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </div>
  );
};
