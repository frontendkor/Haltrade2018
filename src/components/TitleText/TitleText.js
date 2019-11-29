import React from "react";
import "./TitleText.sass";

const TitleText = props => {
  const { title, subtitle, size } = props;
  return (
    <React.Fragment>
      <h1 className={`Title ${size}`}>{title}</h1>
      {subtitle ? <p className="Text">{subtitle}</p> : null}
    </React.Fragment>
  );
};

export default TitleText;
