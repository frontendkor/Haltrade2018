import React from "react";
import "./Touch.sass";

const Touch = props => {
  const { show, showNav } = props;
  const oNav = e => {
    e.preventDefault();
    show ? showNav(false) : showNav(true);
  };

  return (
    <div className="TouchContainer">
      <a href="//:" onClick={oNav} className="Touch">
        <div
          className={
            show ? "TouchItem TouchItem1 open" : "TouchItem TouchItem1 close"
          }
        />
        <div
          className={
            show ? "TouchItem TouchItem2 open" : "TouchItem TouchItem2 close"
          }
        />
        <div
          className={
            show ? "TouchItem TouchItem3 open" : "TouchItem TouchItem3 close"
          }
        />
      </a>
    </div>
  );
};

export default Touch;
