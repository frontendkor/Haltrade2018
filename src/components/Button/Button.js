import React from "react";

const Button = props => {
  const { button, type, name, onClick, classis, link, download, href } = props;
  const renderBtn = () => {
    if (link) {
      return download ? (
        <a href={href} className={classis} download>
          {name}
        </a>
      ) : (
        <a href={href} className={classis}>
          {name}
        </a>
      );
    }
    if (button) {
      return (
        <button type={type} className={classis} onClick={onClick}>
          {name}
        </button>
      );
    }
    return null;
  };
  return <React.Fragment>{renderBtn()}</React.Fragment>;
};

export default Button;
