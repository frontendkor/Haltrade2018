import React from "react";

const Range = props => {
  const {
    input: { value, onChange },
    classis,
    min,
    max,
    input,
    meta
  } = props;
  return (
    <div className={classis}>
      <p>
        Укажите объем поставок : <span>{value ? `${value} кг` : null}</span>
      </p>
      <input
        {...input}
        type="range"
        min={min}
        max={max}
        step="1"
        value={value}
        onChange={onChange}
        {...props}
      />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </div>
  );
};

export default Range;
