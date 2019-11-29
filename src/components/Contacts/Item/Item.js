import React from "react";

import mod from "./Item.module.sass";

const Item = props => {
  const { ic, title, title2, text, phone, email } = props.data;
  return (
    <div className={mod.item}>
      <div className={mod.icContainer}>{ic}</div>
      <p className={mod.title}>
        {title}
        <br />
        {title2 ? <span className={mod.title2}>{title2}</span> : null}
      </p>
      {phone ? (
        <a href={`tel:${phone}`} className={mod.link}>
          {phone}
        </a>
      ) : null}
      {email ? (
        <a href={`mailto:${email}`} className={mod.link}>
          {email}
        </a>
      ) : null}
      {text ? <p className={mod.text}>{text}</p> : null}
    </div>
  );
};

export default Item;
