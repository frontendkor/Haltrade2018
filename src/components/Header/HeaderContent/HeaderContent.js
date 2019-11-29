import React from "react";
import Logo from "../../Logo/Logo";
import FormBackCallContainer from "../../../containers/FormsContainers/FormBackCallContainer";
import TouchContainer from "../../../containers/Nav/TouchContainer";
import mod from "./HeaderContent.module.sass";

const HeaderContent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className={mod.HeaderContent}>
          <div className={mod.HeaderLogo}>
            <Logo />
          </div>
          <div className={mod.HeaderAddress}>
            <p>Минск, 1-й Котляковский пер. 4А</p>
          </div>
          <div className={mod.HeaderLogin}>
            <a href="//">Войти в кабинет</a>
          </div>
          <div className={mod.HeaderPhone}>
            <FormBackCallContainer />
          </div>
          <div className={mod.HeaderNavBtn}>
            <TouchContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
