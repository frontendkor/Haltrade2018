import React from "react";

export const InputSelect = props => {
  const { input, meta, size, name, options, classis } = props;
  return (
    <div className={classis}>
      <select {...input} name={name} size={size}>
        {options.map(({ id, title }) => {
          return (
            <option key={id} value={title}>
              {title}
            </option>
          );
        })}
      </select>
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </div>
  );
};
